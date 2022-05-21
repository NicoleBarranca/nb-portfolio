import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <nav className="header">
      <h2>
        Nicole<span className="fw-light">Barranca</span>
      </h2>

      <ul className="nav-link">
        <Link to="/" className="liStyle">
          <li>About</li>
        </Link>
        <Link to="/portfolio" className="liStyle">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact" className="liStyle">
          <li>Contact</li>
        </Link>
        <Link to="/resume" className="liStyle">
          <li>Resume</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
