import React, { useState } from "react";
// import About from "../src/components/About";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";

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

  const [pages] = useState([
    {
      name: "about me",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navigation
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          projects={projects}
        ></Navigation>
      </Header>
      <main>
        <Pages currentPage={currentPage}></Pages>
      </main>
      <Footer />
    </div>
  );
}

export default App;
