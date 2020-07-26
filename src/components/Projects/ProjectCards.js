/** @format */

import React from "react";
import style from "./Projects.module.css";

function ProjectCards(props) {
  return (
    <div className={style.ProjectsBox}>
      <img src={props.logo} alt='jslogo' />
      <h3 className={style.ProjectsTitle}>{props.name}</h3>
      <div className={style.button}>
        <div className={style.buttonContainer}>
          <a href={props.githubLink} target='blank'>
            Github
          </a>

          <a href={props.githubLink} target='blank'>
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
