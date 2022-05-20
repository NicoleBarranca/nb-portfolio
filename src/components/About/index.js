import React from "react";
// helpers?
// css
import Bit from "../../assets/bitmoji/Bit.png";

function About() {
  return (
    <div className="about">
      <h1 className="title">About me</h1>
      <img src={Bit} style={{ width: "20%" }} alt="bitmoji" />
      <p>
        My name is name is Nicole Barranca and I am from central New Jersey. I
        am a Full Stack Software Developer, with a background in Web Design.
      </p>
      <p>
        I thoroughly enjoy the process of building, collaborating and completing
        a project. Most of the time you will will find me at my computer
        learning new languages, and technologies while drinking a mega pint of
        coffee. I am passionate about problem solving and when it comes to bugs,
        I cannot be stopped!
      </p>
      <p>
        Take a look at some of my most recent applications in the portfolio
        section.
      </p>
      <p>Thanks for stopping by!</p>
    </div>
  );
}

export default About;
