import React from "react";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// might need App.css or import other css
// might need to import photos

function App() {
  return (
    <div>
      <Header />
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
