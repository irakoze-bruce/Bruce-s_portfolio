/** @format */

import React from "react";
import style from "./Projects.module.css";
import logoJs from "../../assets/l.png";
import logoReact from "../../assets/r.png";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div className={style.Projects}>
      <div>
        <div className={style.ProjectsContent}>
          <h1 className={style.title}>Recent Projects.</h1>
          <div className={style.ProjectsContainer}>
            <ProjectCards
              logo={logoJs}
              name='Question App'
              githubLink='https://github.com/irakoze-bruce/Question-App.git'
            />
            <ProjectCards logo={logoJs} name='Question App' githubLink='...' />
            <ProjectCards logo={logoJs} name='Question App' githubLink='...' />
          </div>
          <div className={style.ProjectsContainer}>
            <ProjectCards
              logo={logoReact}
              name='Question App'
              githubLink='...'
            />
            <ProjectCards
              logo={logoReact}
              name='Question App'
              githubLink='...'
            />
            <ProjectCards
              logo={logoReact}
              name='Question App'
              githubLink='...'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
