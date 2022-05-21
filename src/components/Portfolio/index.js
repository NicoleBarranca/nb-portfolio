import React from "react";

import PF from "../../assets/projects/PF.png";
import MB from "../../assets/projects/MB.png";
import RB from "../../assets/projects/RB.png";
import EC from "../../assets/projects/EC.jpg";
import S144 from "../../assets/projects/S144.jpg";
import PG from "../../assets/projects/PG.jpg";

function Portfolio() {
  return (
    <div className="container mt-5 portfolio">
      <div className="row mb-5">
        <div className="col">
          <a
            href="https://evening-tor-85614.herokuapp.com/"
            alt="podfreaks live site"
          >
            <img
              src={PF}
              alt="studio microphone"
              width="455px"
              height="300px"
              className="images"
            />
          </a>
          <h3 className="mt-2">
            PodFreaks
            <span className="fw-light fs-5 opacity-75 ms-2">
              Node.js | Express.js | Handlebars.js
            </span>
          </h3>

          <p className="opacity-50">
            PodFreaks is an easy to use podcast forum where users can sign-up
            for an account and review various podcasts.
          </p>

          <a
            href="https://evening-tor-85614.herokuapp.com/"
            className="btn "
            id="button"
          >
            Live Site
          </a>

          <a
            href="https://github.com/NicoleBarranca/PodFreaks"
            className="btn "
            id="button"
          >
            Github
          </a>
        </div>
        <div className="col">
          <a
            href="https://chloeyarb.github.io/Music-Box/"
            alt="girl with headphones"
          >
            <img
              src={MB}
              alt="studio microphone"
              width="455px"
              height="300px"
              className="images"
            />
          </a>
          <h3 className="mt-2">
            MusicBox
            <span className="fw-light fs-5 opacity-75 ms-2">
              HTML | CSS | JavaScript
            </span>
          </h3>

          <p className="opacity-50">
            MusicBox is an easy to use tool that allows the user to search the
            lyrics of their favorite songs by inputting the artist name and song
            title.
          </p>

          <a
            href="https://chloeyarb.github.io/Music-Box/"
            className="btn"
            id="button"
          >
            Live Site
          </a>

          <a
            href="https://github.com/chloeyarb/Music-Box"
            className="btn "
            id="button"
          >
            Github
          </a>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col">
          <a
            href="https://nicolebarranca.github.io/Salon-144/"
            alt="bride and groom"
          >
            <img
              src={S144}
              alt="studio microphone"
              width="455px"
              height="300px"
              className="images"
            />
          </a>
          <h3 className="mt-2">
            Salon144
            <span className="fw-light fs-5 opacity-75 ms-2">
              HTML | CSS | Bootstrap
            </span>
          </h3>

          <p className="opacity-50">
            PodFreaks is an easy to use podcast forum where users can sign-up
            for an account and review various podcasts.
          </p>

          <a
            href="https://nicolebarranca.github.io/Salon-144/"
            className="btn"
            id="button"
          >
            Live Site
          </a>

          <a
            href="https://github.com/NicoleBarranca/Salon-144"
            className="btn "
            id="button"
          >
            Github
          </a>
        </div>
        <div className="col">
          <a
            href="https://nicolebarranca.github.io/run-buddy/"
            alt="hero section of website"
          >
            <img
              src={RB}
              alt="studio microphone"
              width="455px"
              height="300px"
              className="images"
            />
          </a>
          <h3 className="mt-2">
            Run Buddy
            <span className="fw-light fs-5 opacity-75 ms-2">HTML | CSS</span>
          </h3>

          <p className="opacity-50">
            This application is a fitness training service template to
            demonstrate skills in CSS and Flexbox.
          </p>

          <a
            href="https://nicolebarranca.github.io/run-buddy/"
            className="btn"
            id="button"
          >
            Live Site
          </a>

          <a
            href="https://github.com/NicoleBarranca/run-buddy"
            className="btn "
            id="button"
          >
            Github
          </a>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col">
          <a
            href="https://nicolebarranca.github.io/Password-Generator/"
            alt="hero section of website"
          >
            <img
              src={PG}
              alt="studio microphone"
              width="455px"
              height="300px"
              className="images"
            />
          </a>
          <h3 className="mt-2">
            Password Generator
            <span className="fw-light fs-5 opacity-75 ms-2">
              HTML | CSS | JavaScript
            </span>
          </h3>

          <p className="opacity-50">
            This app is a password generator that will give the user a unique
            and safe password each time the "generate password" button is
            clicked.
          </p>

          <a
            href="https://nicolebarranca.github.io/Password-Generator/"
            className="btn"
            id="button"
          >
            Live Site
          </a>

          <a
            href="https://nicolebarranca.github.io/Password-Generator/"
            className="btn "
            id="button"
          >
            Github
          </a>
        </div>
        <div className="col">
          <a
            href="https://nicolebarranca.github.io/Everything-Cal/"
            alt="hero section of website"
          >
            <img
              src={EC}
              alt="studio microphone"
              width="455px"
              height="300px"
              className="images"
            />
          </a>
          <h3 className="mt-2">
            Everything Cal
            <span className="fw-light fs-5 opacity-75 ms-2">
              HTML | CSS | JavaScript
            </span>
          </h3>

          <p className="opacity-50">
            Everything Cal is a daily planner that allows the user to save their
            todos, goals or notes for a specific hour of the day.
          </p>

          <a
            href="https://nicolebarranca.github.io/Everything-Cal/"
            className="btn"
            id="button"
          >
            Live Site
          </a>

          <a
            href="https://github.com/NicoleBarranca/Everything-Cal"
            className="btn "
            id="button"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
