import { React } from "react";
import GetToKnow from "../images/GetToKnowMe/CoverPhoto.JPG";
import Resume from "../images/Resume/CoverPhoto_(1).jpg";
import GetInTouch from "../images/GetInTouch/CoverPhoto_2.jpg";
import Believe from "../images/Believe/CoverPhoto_(2).jpg";
import Photography from "../images/Photography/CoverPhoto.JPG";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 p-4 gap-4">
        <section className="">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              className="rounded-lg"
              src={GetToKnow}
              alt="Smiling girl and a plant."
            />
            <a href="/about">
              <h3 className="text-white text-2xl absolute bottom-1 right-1 text-right">
                get to know me
              </h3>
            </a>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-4">
            <div className="aspect-w-4 aspect-h-3">
              <img
                className="rounded-lg"
                src={GetInTouch}
                alt="Smiling girl and a plant."
              />
              <a href="/about">
                <h3 className="text-white text-2xl absolute bottom-1 right-1 text-right">
                  get in touch
                </h3>
              </a>
            </div>
            <div className="aspect-w-4 aspect-h-3">
              <img
                className="rounded-lg"
                src={Resume}
                alt="Smiling girl and a plant."
              />
              <a href="/about">
                <h3 className="text-white text-2xl absolute bottom-1 right-1 text-right">
                  resume
                </h3>
              </a>
            </div>
          </div>
        </section>
        <section className="">
          <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 mb-4 gap-4">
            <div className="aspect-w-4 aspect-h-3">
              <img
                className="rounded-lg"
                src={Believe}
                alt="Smiling girl and a plant."
              />
              <a href="/believe">
                <h3 className="text-white text-2xl absolute bottom-1 right-1 text-right">
                  what i believe
                </h3>
              </a>
            </div>
            <div className="aspect-w-4 aspect-h-3">
              <img
                className="rounded-lg"
                src={Resume}
                alt="Smiling girl and a plant."
              />
              <a href="/about">
                <h3 className="text-white text-2xl absolute bottom-1 right-1 text-right">
                  contact me
                </h3>
              </a>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="rounded-lg"
              src={Photography}
              alt="Smiling girl and a plant."
            />
            <a href="/about" title="">
              <h3 className="text-white text-2xl absolute bottom-1 right-1 text-right">
                photography
              </h3>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
