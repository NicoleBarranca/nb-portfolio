import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://github.com/NicoleBarranca">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicole-barranca/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
