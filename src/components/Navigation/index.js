import React from "react";

function Navigation() {
  return (
    <nav className="header">
      <h2>
        <a>NB</a>
      </h2>
      <div>
        <ul className="nav-link">
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
