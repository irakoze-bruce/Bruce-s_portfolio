/** @format */

import React from "react";
import style from "./Home.module.css";
import pc from "../../assets/images/a.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSlack,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Home() {
  return (
    <div className={style.Home}>
      <div className={style.HomeContainer}>
        <div className={style.HomeImage}>
          <img src={pc} alt='images' />
        </div>
        <div className={style.HomeDescription}>
          <h1 className={style.Home_title}>Hello,i'm Bruce Mars</h1>
          <h1 className={style.Home_titleOne}>FrontEnd Developer</h1>
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

export default Home;
