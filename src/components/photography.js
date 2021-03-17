import { React, useState, useEffect } from "react";
import sanityClient from "../client.js";
import Skeleton from "@material-ui/lab/Skeleton";
import { Redirect } from "react-router-dom";

export const Photography = () => {
  const [photographyDat, setPhotographyDat] = useState(null);

  useEffect(() => {
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
        setPhotographyDat(data);
      })
      .catch(function (error) {
        console.log(error);
        return <Redirect to="/400" />;
      });
  }, []);

  return (
    <div className="container mx-auto sm:p-4">
      <h3 className="text-center text-3xl font-bold text-primary pb-4">
        {!photographyDat ? (
          <Skeleton animation="wave" height={80} />
        ) : (
          "Here is a sample of some of my work!"
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
            <div className="aspect-w-16 aspect-h-9" key={index}>
              <img src={image.photographyImg} alt={image.imageAlt} />
            </div>
            // <ImageCard key={index} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};
