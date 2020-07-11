/** @format */

import React from "react";
import style from "./Projects.module.css";
import Aos from "aos";

function Projects() {
  Aos.init();
  return (
    <div className={style.Projects}>
      <div data-aos='fade-up' data-aos-duration='3000'>
        <div className={style.Projects_container}>
          <h1 className={style.title}>Projects.</h1>
          <div
            className={style.Projects_box}
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <h3 className={style.Projects_title}>Question_app</h3>
            <p className={style.Projects_item}>
              <a
                href='https://github.com/irakoze-bruce/Question-App.git'
                target='blank'
              >
                more details
              </a>
            </p>
          </div>

          <div
            className={style.Projects_box}
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <h3 className={style.Projects_title}>Color_flipper</h3>
            <p className={style.Projects_item}>
              <a
                href='https://github.com/irakoze-bruce/color-flipper.git'
                target='blank'
              >
                more details
              </a>
            </p>
          </div>

          <div
            className={style.Projects_box}
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <h3 className={style.Projects_title}>Question_app</h3>
            <p className={style.Projects_item}>
              <a
                href='https://github.com/irakoze-bruce/Question-App.git'
                target='blank'
              >
                more details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
