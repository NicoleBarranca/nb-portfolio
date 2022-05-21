import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faCirclePhone,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="fixed-bottom container">
      <div className="d-flex justify-content-center">
        <a href="https://github.com/NicoleBarranca" id="icon" className="gh">
          <FontAwesomeIcon icon={faGithub} className="iconStyle" />
        </a>

        <a href="https://www.linkedin.com/in/nicole-barranca/" id="icon">
          <FontAwesomeIcon icon={faLinkedin} className="iconStyle" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
