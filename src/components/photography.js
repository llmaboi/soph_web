import React from 'react';
import sanityClient from '../client.js';
import Skeleton from '@material-ui/lab/Skeleton';
import { Redirect } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class Photography extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      photographyDat: null,
    };
  }

  componentDidMount() {
    sanityClient
      .fetch(
        `*[_type == "photography" ] | order(imageOrderNum) {
        title,
        _id,
        "photographyImg": image.asset->url,
        imageAlt,
        imageOrderNum
      }`
      )
      .then((data) => {
        this.setState({ photographyDat: data });
      })
      .catch(function (error) {
        console.log(error);
        return <Redirect to="/400" />;
      });
  }

  render() {
    const { photoIndex, isOpen, photographyDat } = this.state;

    // const [photographyDat, setPhotographyDat] = useState(null);

    return (
      <div className="container mx-auto sm:p-4">
        <h3 className="text-center text-3xl font-bold text-primary pb-4">
          {!photographyDat ? (
            <Skeleton animation="wave" height={80} />
          ) : (
            'Here is a sample of some of my work!' + photographyDat.length
          )}
        </h3>
        {!photographyDat ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Skeleton animation="wave" height={250} />
            <Skeleton animation="wave" height={250} />
            <Skeleton animation="wave" height={250} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {photographyDat.map((image, index) => (
              <div
                className="aspect-w-3 aspect-h-4 md:aspect-w-16 md:aspect-h-16 lg:aspect-w-16 lg:aspect-h-9"
                key={index}
                onClick={() => this.setState({ photoIndex: index, isOpen: true })}
              >
                <img
                  className="object-cover"
                  src={image.photographyImg}
                  alt={image.imageAlt}
                />
              </div>
              // <ImageCard key={index} image={image} />
            ))}
          </div>
        )}
        {isOpen && photographyDat && (
          <Lightbox
            mainSrc={photographyDat[photoIndex].photographyImg}
            nextSrc={photographyDat[(photoIndex + 1) % photographyDat.length].photographyImg}
            prevSrc={
              photographyDat[
                (photoIndex + photographyDat.length - 1) % photographyDat.length
              ].photographyImg
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + photographyDat.length - 1) %
                  photographyDat.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % photographyDat.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
