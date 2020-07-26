/** @format */

import React from "react";
import style from "./Contact.module.css";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSlack,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className={style.Contact}>
      <div className={style.ContactContent}>
        <h1 className={style.title}>Contact me.</h1>

        <h4 className={style.titleTwo}>Get in Touch</h4>
        <div className={style.ContactContainer}>
          <div className={style.box}>
            <div className={style.icon}>
              {" "}
              <FaLocationArrow />
            </div>
            <p className={style.text}>Address:BURUNDI,Bujumbura</p>
          </div>

          <div className={style.box}>
            <div className={style.icon}>
              <FaPhoneAlt />
            </div>
            <p className={style.text}>Phone:+25779335848</p>
          </div>
        </div>

        <div>
          <h5>find me on :</h5>
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
      </div>

      <footer>
        <p>© Copyright 2020. All Rights Reserved</p>
        <p>
          Designed by{" "}
          <a href='/'>
            <span>Bruce Mars</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Contact;
