/** @format */

import React, { useState, useEffect } from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import "../App/App.css";
import Home from "../Home/Home";

const App = () => {
  const [Sticky, setSticky] = useState(false);

  useEffect(() => {
    let a = document.querySelector(".toggle");
    let b = document.querySelector("ul");
    console.log(a);

    a.onclick = () => {
      b.classList.toggle("navOpen");
      console.log(b);
    };

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
        <div className='PortfolioName'>
          <a href='/' className='portfolioNameOne'>
            Bruce{" "}
          </a>
          <a href='/' className='portfolioNameTwo'>
            Mars
          </a>
        </div>
        <div className='toggle'>
          <p>menu</p>
        </div>

        <nav className='navigation'>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>

            <li>
              <a href='#service'>Service</a>
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
      <div id='about'>
        <About />
      </div>
      <div id='service'>
        <Service />
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
