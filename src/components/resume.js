import { React, useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Redirect } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Resume() {
  const [resumeDat, setResumeDat] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"]{
          title,
          _id,
          resumeLink
        }`
      )
      .then((data) => setResumeDat(data[0]))
      .catch(function (error) {
        console.log(error);
        return <Redirect to="/400" />;
      });
  }, []);

  if (!resumeDat)
    return (
      <div className="p-4">
        <div className="w-1/2 mx-auto my-0">
          <Skeleton animation="wave" height={480} />
        </div>
      </div>
    );

  return (
    <div className="p-4">
      <object
        data={resumeDat.resumeLink}
        type="application/pdf"
        className="min-w-min w-1/2 mx-auto my-0"
        height="520"
      >
        <p>
          If your browesr was unable to load the pdf please click{" "}
          <a href={resumeDat.resumeLink}>here</a> to view it.
        </p>
      </object>
    </div>
  );
}
