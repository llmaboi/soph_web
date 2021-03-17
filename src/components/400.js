import React from "react";
import { Link } from "react-router-dom";
import Photo from "../images/Believe/Sunflower404.jpg";

export default function NotFound() {
  return (
    <div className="block p-4">
      {/* <div
        className="text-center bg-contain bg-no-repeat bg-center min-h-full rounded-lg"
        > */}
      <div
        className="relative bg-cover rounded bg-no-repeat bg-center min-h-full flex items-center" // grid grid-cols-1 grid-rows-3
        style={{ backgroundImage: `url(${Photo})`, height: "500px" }}
      >
        {/* <div> </div> */}
        <div className="text-center w-full">
          {/* <img
              src={Photo}
              className="object-contain min-h-full rounded-lg w-2/3 mt-0 mb-0 m-auto block"
            /> */}
          <h1 className="text-white font-bold">
            400 - Data not found!
          </h1>
          <h2 className="text-white font-semibold">
            Stay on the sunny side of life, <br />
            try the link below!
          </h2>
        {/* </div>
        <div className="my-auto mx-0"> */}
          <Link to="/" className="text-white">
            <button className="bg-yellow-500 p-2 mt-2 rounded-lg">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}
