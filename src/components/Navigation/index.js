import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <nav className="header">
      <h2>NB</h2>
      <ul className="nav-link">
        <Link to="/">
          <li>About</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/resume">
          <li>Resume</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
