import { React, useState, useEffect } from 'react';
import sanityClient from '../client.js';
import Skeleton from '@material-ui/lab/Skeleton';

function Build16x9(props) {
  return (
    <div className="aspect-w-16 aspect-h-9 mb-4">
      <img className="rounded-lg" src={props.imageSrc} alt={props.imageAlt} />
      <a href={props.link}>
        <h3 className="text-shadow-dark text-white text-2xl font-extrabold absolute bottom-1 right-1 text-right">
          {props.title}
        </h3>
      </a>
    </div>
  );
}

function Build4x3(props) {
  return (
    <div className="aspect-w-4 aspect-h-3">
      <img className="rounded-lg" src={props.imageSrc} alt={props.imageAlt} />
      <a href={props.link}>
        <h3 className="text-shadow-dark text-white text-2xl font-extrabold absolute bottom-1 right-1 text-right">
          {props.title}
        </h3>
      </a>
    </div>
  );
}

export default function Home() {
  const [pagesDat, setPagesDat] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'landingLinks' && pageOrderNum <= 6] | order(pageOrderNum) {
        title,
        _id,
        pageOrderNum,
        "image": image.asset->url,
        imageAlt,
        link
      }`
      )
      .then((data) => {
        setPagesDat(data);
      })
      .catch(console.error);
    // TODO: Handle the error here in a better way... redirect to a proper screen
  }, []);

  // if (!pagesDat || (pagesDat && pagesDat.length !== 6)) {
  //   console.log("Incorrect length", pagesDat);
  //   //  TODO: Figure out what numbers are missing and put a placeholder there.
  // }

  // TODO: Implement a skeleton loading like photography page.
  if (!pagesDat) {
    return (
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 p-4 gap-4">
        <div className="mb-4">
          <Skeleton variant="rect" height={250} animation="wave" />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-4">
          <div>
            <Skeleton variant="rect" height={250} animation="wave" />
          </div>
          <div>
            <Skeleton variant="rect" height={250} animation="wave" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 mb-4 gap-4">
          <div>
            <Skeleton variant="rect" height={250} animation="wave" />
          </div>
          <div>
            <Skeleton variant="rect" height={250} animation="wave" />
          </div>
        </div>
        <div>
          <Skeleton variant="rect" height={250} animation="wave" />
        </div>
      </div>
    );
  } else {
    return (
      <main>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 p-4 gap-4">
          <section className="">
            <Build16x9
              title={pagesDat[0].title.toLowerCase()}
              imageSrc={pagesDat[0].image}
              imageAlt={pagesDat[0].imageAlt}
              link={pagesDat[0].link}
            />
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-4">
              <Build4x3
                title={pagesDat[1].title.toLowerCase()}
                imageSrc={pagesDat[1].image}
                imageAlt={pagesDat[1].imageAlt}
                link={pagesDat[1].link}
              />
              <Build4x3
                title={pagesDat[2].title.toLowerCase()}
                imageSrc={pagesDat[2].image}
                imageAlt={pagesDat[2].imageAlt}
                link={pagesDat[2].link}
              />
            </div>
          </section>
          <section className="">
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 mb-4 gap-4">
              <Build4x3
                title={pagesDat[3].title.toLowerCase()}
                imageSrc={pagesDat[3].image}
                imageAlt={pagesDat[3].imageAlt}
                link={pagesDat[3].link}
              />
              <Build4x3
                title={pagesDat[4].title.toLowerCase()}
                imageSrc={pagesDat[4].image}
                imageAlt={pagesDat[4].imageAlt}
                link={pagesDat[4].link}
              />
            </div>
            <Build16x9
              title={pagesDat[5].title.toLowerCase()}
              imageSrc={pagesDat[5].image}
              imageAlt={pagesDat[5].imageAlt}
              link={pagesDat[5].link}
            />
          </section>
        </div>
      </main>
    );
  }
}
