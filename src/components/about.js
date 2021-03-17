import { React, useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Skeleton from "@material-ui/lab/Skeleton";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [aboutDat, setAboutDat] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pages" && title == "Get to know me"]{
          title,
          _id,
          body,
          "aboutImg": image.asset->url,
          imageAlt
        }`
      )
      .then((data) => setAboutDat(data[0]))
      .catch(console.error);
    // TODO: Handle the error here in a better way... redirect to a proper screen
  }, []);

  if (!aboutDat)
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton animation="wave" height={200} className='' />
        <Skeleton animation="wave" height={200} className='' />
      </div>
    );

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 p-4">
      <div className="text-primary">
        <BlockContent
          blocks={aboutDat.body}
          projectId="fbuquty9"
          dataset="production"
          className="mx-0 my-auto"
        />
      </div>
      <div className="aspect-w-16 aspect-h-9">
        <img
          style={{ display: "block", margin: "0 auto" }}
          src={urlFor(aboutDat.aboutImg).url()}
          className="lg:col-span-2 rounded"
          alt={aboutDat.imageAlt}
        />
      </div>
    </div>
  );
}
