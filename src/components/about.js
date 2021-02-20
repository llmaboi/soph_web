import React from "react";
import GetToKnow from "../images/GetToKnowMe/CoverPhoto.JPG";

export default function About() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 gap-4 p-4">
      <p className="mt-auto mb-auto ml-0 mr-0">
        Expedita et quia animi dignissimos. Ipsam architecto ut mollitia
        architecto non qui tempore nemo accusamus. Quod veritatis deleniti et
        atque. Tempora alias dolorum cumque dolores non voluptatem velit et. At
        quo ut necessitatibus molestiae velit aut et quia. Ea saepe dolor eum
        saepe et corrupti ipsa molestiae. Qui ut esse sit sit eos. Eius
        excepturi exercitationem sequi soluta doloremque autem nisi. Sed sunt
        dolorem officiis nemo ipsa. Rerum a suscipit ea et at. Non enim expedita
        debitis facilis et sapiente. Expedita sint aut voluptatem temporibus ad
        voluptatem. Dolorem itaque eligendi reiciendis aperiam laudantium sequi
        qui.
      </p>
      <img
        style={{ display: "block", margin: "0 auto" }}
        src={GetToKnow}
        className="lg:col-span-2 rounded"
        alt="Smiling face"
      />
    </div>
  );
}
