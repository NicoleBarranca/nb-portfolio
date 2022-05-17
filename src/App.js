import React, { useState } from "react";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navigation from "./components/Navigation";

// might need App.css or import other css
// might need to import photos

function App() {
  const [projects] = useState([
    {
      name: "PodFreaks",
      description: "Podfreaks description",
      tech: "Node.js",
    },
    {
      name: "MusicBox",
      description: "MusicBox description",
      tech: "Node.js",
    },
    {
      name: "Run Buddy",
      description: "Run Buddy description",
      tech: "HTML/CSS",
    },
    {
      name: "Everything Cal",
      description: "Everything Cal description",
      tech: "HTML/CSS/JavaScript",
    },
    {
      name: "Fifth project",
      description: "Fifth project description",
      tech: "HTML/CSS/JavaScript",
    },
    {
      name: "Sixth project",
      description: "Sixth project description",
      tech: "HTML/CSS/JavaScript",
    },
  ]);

  // const [currentCategory, setCurrentCategory] = useState(projects[0]);

  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header>
        <Navigation projects={projects}></Navigation>
      </Header>
      <main>
        <About />
        <Portfolio />
        <Contact />
        <Resume />
        <Footer />
      </main>
    </div>
  );
}

export default App;
