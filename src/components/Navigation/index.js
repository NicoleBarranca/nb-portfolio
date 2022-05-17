import React, { useState } from "react";

function Navigation(props) {
  // const { projects = [] } = props;
  //only argument useState takes is the initial state like (0) for the counter
  // const [click, setClick] = useState;
  return (
    <nav className="header">
      <h2>
        <a>NB</a>
      </h2>
      <ul className="nav-link">
        <li>
          <a className="nav-li" data-testid="about" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="nav-li" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-li" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-li" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
