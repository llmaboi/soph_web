import { React, useState, useEffect } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { Redirect } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Business() {
  const [businessDat, setBusinessDat] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pages" && title == "Business experience"]{
          title,
          _id,
          body,
          "businessImg": image.asset->url,
          imageAlt
        }`
      )
      .then((data) => setBusinessDat(data[0]))
      .catch(function (err) {
        console.log(err);
        return <Redirect to="/400" />;
      });
  }, []);

  if (!businessDat)
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton animation="wave" height={200} />
        <Skeleton animation="wave" height={200} />
      </div>
    );

  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-4 p-4">
      <div className="aspect-w-16 aspect-h-9">
        <img
          style={{ display: 'block', margin: '0 auto' }}
          src={urlFor(businessDat.businessImg).url()}
          className="lg:col-span-2 rounded"
          alt={businessDat.imageAlt}
        />
      </div>
      <div className="text-primary">
        <BlockContent
          blocks={businessDat.body}
          projectId="fbuquty9"
          dataset="production"
        />
      </div>
    </div>
  );
}
