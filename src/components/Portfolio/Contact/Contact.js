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

import Aos from "aos";

const Contact = () => {
  Aos.init();
  return (
    <div className={style.Contact}>
      <div
        className={style.Contact_container}
        data-aos='fade-up'
        data-aos-duration='3000'
      >
        <h1 className={style.title}>Contact me.</h1>
        <div className={style.box}>
          <div className={style.address}>
            <div className={style.link}>
              <p>
                <FaLocationArrow />
              </p>
            </div>
            <p className={style.text}>Address:BURUNDI,Bujumbura</p>
          </div>
          <div className={style.address}>
            <div className={style.link}>
              <p>
                <FaPhoneAlt />
              </p>
            </div>
            <p className={style.text}>Phone:+25779335848</p>
          </div>
        </div>
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
};

export default Contact;
