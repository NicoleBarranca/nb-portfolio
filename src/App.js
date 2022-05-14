import React from "react";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Footer from "./components/Footer";

// might need App.css or import other css
// might need to import photos

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
