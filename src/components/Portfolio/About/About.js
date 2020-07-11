/** @format */

import React from "react";
import style from "./About.module.css";
import pc from "../../../assets/images/a.jpg";
import AOS from "aos";

function About() {
  AOS.init();

  return (
    <div
      className={style.About}
      id='about'
      data-aos='fade-up'
      data-aos-duration='3000'
    >
      <div
        className={style.About_image}
        data-aos='fade-up'
        data-aos-duration='3000'
      >
        <img src={pc} alt='images' />
      </div>

      <div
        className={style.About_description}
        data-aos='fade-up'
        data-aos-duration='3000'
      >
        <p>
          my name is <span>Bruce Mars</span> , based in BURUNDI, I am a student
          at the university of Lake Tanganyilka,
        </p>
        <p>
          {" "}
          I am a FrontEnd developer, I study and code myself for web{" "}
          <span>(JavaScript [ReactJs], Html and Css)</span>
        </p>
      </div>
    </div>
  );
}

export default About;
