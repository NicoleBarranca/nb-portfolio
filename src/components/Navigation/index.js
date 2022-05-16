import React from "react";

function Navigation(props) {
  const { contactSelected, setContactSelected } = props;
  return (
    <nav className="header">
      <h2>
        <a>NB</a>
      </h2>
      <ul className="nav-link">
        <li>
          <a
            className="nav-li"
            data-testid="about"
            href="#about"
            onClick={() => setContactSelected(false)}
          >
            About Me
          </a>
        </li>
        <li>
          <a className="nav-li" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-li" onClick={() => setContactSelected(true)}>
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
