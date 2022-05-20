import React from "react";

function Navigation(props) {
  // const { projects = [] } = props;
  //only argument useState takes is the initial state like (0) for the counter
  // const [click, setClick] = useState;

  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <nav className="header">
      <h2>
        <button>NB</button>
      </h2>

      <ul className="flex-row">
        {pages.map((pages) => (
          <li
            className={`mx-5 ${currentPage.name === pages.name && "navActive"}`}
            key={pages.name}
          >
            <span onClick={() => setCurrentPage(pages)}></span>
          </li>
        ))}
        {/* <li>
          <a href="#portfolio" onClick={setCurrentPage("portfolio")}>
            Portfolio
          </a>
        </li> */}
      </ul>

      {/* <ul className="nav-link">
        <li>
          <a className="nav-li" data-testid="about" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="nav-li" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-li" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-li" href="#resume">
            Resume
          </a>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navigation;
