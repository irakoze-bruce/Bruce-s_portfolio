/** @format */

import React, { useState, useEffect } from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "../App/App.css";
import Home from "../Home/Home";

const App = () => {
  const [Sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const pageY = window.scrollY < 200;
      if (pageY !== true) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div className='Portfolio'>
      <header className={Sticky ? "scrolled" : "nav"}>
        <div className='PortfolioName'>
          <a href='/'>Bruce Mars</a>
        </div>

        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#project'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <div id='home'>
        <Home />
      </div>
      <div>
        <About />
      </div>

      <div id='project'>
        <Projects />
      </div>

      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
};

export default App;
