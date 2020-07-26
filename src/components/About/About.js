/** @format */

import React from "react";
import style from "./About.module.css";
import pc from "../../assets/images/a.jpg";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSlack,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  return (
    <div className={style.About} id='about'>
      <div className={style.AboutContainer}>
        <div className={style.AboutImage}>
          <img src={pc} alt='images' />
        </div>

        <div className={style.AboutDescription}>
          <h3>About Bruce.</h3>
          <p>
            my name is <span>Bruce Mars</span> , based in BURUNDI, I am a
            student at the university of Lake Tanganyilka, I am a FrontEnd
            developer, I study and code myself for web
            <span>(JavaScript [ReactJs], Html and Css).</span>
          </p>
        </div>
      </div>

      <div className={style.social}>
        <a href='www.facebook.com'>
          <FaFacebook />
        </a>
        <a href='https://twitter.com/IrakozeMars' target='__blank'>
          <FaTwitter />
        </a>
        <a href='https://www.instagram.com/brucemarsirakoze/' target='blank'>
          <FaInstagram />
        </a>
        <a
          href='https://app.slack.com/client/T0151842PQC/D016N4RT9U2/thread/C014TM3FZAR-1593798449.022900'
          target='blank'
        >
          <FaSlack />
        </a>
        <a href='https://github.com/irakoze-bruce' target='blank'>
          <FaGithub />
        </a>
        <a href='https://mail.google.com/mail/u/0/' target='blank'>
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default About;
