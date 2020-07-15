/** @format */

import React from "react";
import style from "./About.module.css";
import pc from "../../assets/images/a.jpg";
import AOS from "aos";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSlack,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

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

      <div className={style.social}>
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
    </div>
  );
}

export default About;
