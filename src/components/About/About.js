/** @format */

import React from "react";
import style from "./About.module.css";
import AboutImage from "../../assets/images/home-right.png";

function About() {
  return (
    <div className={style.About} id='about'>
      <div className={style.AboutContainer}>
        <div className={style.AboutDescription}>
          <div className={style.AboutDescriptionText}>
            <h3>LET’S INTRODUCE ABOUT MYSELF</h3>
            <p>
              my name is <span>Bruce Mars</span> , based in BURUNDI, I am a
              student at the university of Lake Tanganyilka, I am a FrontEnd
              developer, I study and code myself for web
              <span>(JavaScript [ReactJs], Html and Css).</span>
            </p>
          </div>
          <img src={AboutImage} title='about me' alt='img' />
        </div>
      </div>
    </div>
  );
}

export default About;
