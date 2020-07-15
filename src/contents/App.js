/** @format */

import React, { useState, useEffect } from "react";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import "./App.css";

const App = () => {
  const [Sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const pageY = window.scrollY < 100;
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
        <div className='Portfolio_name'>
          <a href='/'>Bruce Mars</a>
        </div>

        <nav>
          <ul>
            <li>
              <a href='/'>About me</a>
            </li>
            <li>
              <a href='#project'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact me</a>
            </li>
          </ul>
        </nav>
      </header>

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
