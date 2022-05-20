import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    <Router>
      <div>
        <Header />
        <Switch>
          <main>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>

            <Footer />
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
