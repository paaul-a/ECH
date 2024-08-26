import { useState } from "react";
import "./App.css";

import Logo10 from "../logo/ECH-logo10.png";

import { Link, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
// import { CSSTransition } from "react-transition-group";

import Home from "./components/Home";
import Form from "./components/Form";
import Contact from "./components/Contact";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img className="logo6" src={Logo10} alt="Logo" />
          </Link>
          <div className="nav-links">
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link
              className="nav-link"
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
            >
              ABOUT
            </Link>

            <Link className="nav-link" to="/form">
              QUOTE REQUEST
            </Link>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Element name="about">
              <Home />
            </Element>
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
