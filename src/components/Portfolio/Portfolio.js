/** @format */

import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSlack,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import style from "./Portfolio.module.css";
import "../../contents/App.css";

const Portfolio = () => {
  const [Sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const topScroll = window.scrollY < 50;
      if (topScroll !== true) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div className={style.Portfolio}>
      <header className={Sticky ? "scrolled" : "nav"}>
        <div
          className={style.social}
          data-aos='zoom-in'
          data-aos-duration='3000'
        >
          <a href='www.facebook.com'>
            <FaFacebook />
          </a>
          <a href='https://twitter.com/IrakozeMars'>
            <FaTwitter />
          </a>
          <a href='https://www.instagram.com/brucemarsirakoze/'>
            <FaInstagram />
          </a>
          <a href='https://app.slack.com/client/T0151842PQC/D016N4RT9U2/thread/C014TM3FZAR-1593798449.022900'>
            <FaSlack />
          </a>
          <a href='https://github.com/irakoze-bruce'>
            <FaGithub />
          </a>
          <a href='https://mail.google.com/mail/u/0/'>
            <FaEnvelope />
          </a>
        </div>

        <nav data-aos='zoom-in' data-aos-duration='3000'>
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

export default Portfolio;
