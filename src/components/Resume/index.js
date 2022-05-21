import React from "react";

function Resume() {
  return (
    <div className="resume">
      <a
        href="https://drive.google.com/file/d/1SUZT2dyvOu1ZqyKQoP6Xn4ffAvj-j9oG/view?usp=sharing"
        className="btn"
        id="button"
      >
        Resume
      </a>

      <h2>Front-End Proficiencies</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-End Proficiencies</h2>
      <ul>
        <li>RESTful API</li>
        <li>ReactJS</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}

export default Resume;
