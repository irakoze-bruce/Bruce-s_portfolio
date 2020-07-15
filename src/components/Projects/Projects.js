/** @format */

import React from "react";
import style from "./Projects.module.css";
import Aos from "aos";
import logoJs from "../../assets/l.png";
import logoReact from "../../assets/r.png";

function Projects() {
  Aos.init();
  return (
    <div className={style.Projects}>
      <div>
        <h1 className={style.title}>Recent Projects.</h1>
        <div className={style.Projects_container}>
          <div className={style.Projects_box}>
            <img src={logoJs} alt='jslogo' />
            <h3 className={style.Projects_title}>Question_app</h3>
            <div className={style.button}>
              <div className={style.button_container}>
                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  Github
                </a>

                <a
                  href='file:///home/bruce/Downloads/Question-App-master/index.html'
                  target='blank'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className={style.Projects_box}>
            <img src={logoJs} alt='jslogo' />
            <h3 className={style.Projects_title}>Color_flipper</h3>
            <div className={style.button}>
              <div className={style.button_container}>
                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  Github
                </a>

                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className={style.Projects_box}>
            <img src={logoJs} alt='jslogo' />
            <h3 className={style.Projects_title}>Question_app</h3>
            <div className={style.button}>
              <div className={style.button_container}>
                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  Github
                </a>

                <a
                  href='file:///home/bruce/Downloads/Question-App-master/index.html'
                  target='blank'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.Projects_container}>
          <div className={style.Projects_box}>
            <img src={logoReact} alt='Reactlogo' />
            <h3 className={style.Projects_title}>Question_app</h3>
            <div className={style.button}>
              <div className={style.button_container}>
                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  Github
                </a>

                <a
                  href='file:///home/bruce/Downloads/Question-App-master/index.html'
                  target='blank'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className={style.Projects_box}>
            <img src={logoReact} alt='Reactlogo' />
            <h3 className={style.Projects_title}>Color_flipper</h3>
            <div className={style.button}>
              <div className={style.button_container}>
                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  Github
                </a>

                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className={style.Projects_box}>
            <img src={logoReact} alt='Reactlogo' />
            <h3 className={style.Projects_title}>Question_app</h3>
            <div className={style.button}>
              <div className={style.button_container}>
                <a
                  href='https://github.com/irakoze-bruce/Question-App.git'
                  target='blank'
                >
                  Github
                </a>

                <a
                  href='file:///home/bruce/Downloads/Question-App-master/index.html'
                  target='blank'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
