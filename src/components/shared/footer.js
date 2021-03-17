import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { React } from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center text-primary">
      <p>
        {new Date().getFullYear() + " "}
        <FontAwesomeIcon icon={faCopyright} className="" /> Sophie Jacobsen
      </p>
    </footer>
  );
}
