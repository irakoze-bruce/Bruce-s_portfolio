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
            <ProjectCards
              logo={logoJs}
              name='Color Flipper'
              githubLink='https://github.com/irakoze-bruce/color-flipper'
            />
            <ProjectCards logo={logoJs} name='Modal' githubLink='...' />
          </div>
          <div className={style.ProjectsContainer}>
            <ProjectCards
              logo={logoReact}
              name='Calculator App'
              githubLink='https://github.com/irakoze-bruce/Calculator-App-'
            />
            <ProjectCards
              logo={logoReact}
              name='Phone Store App'
              githubLink='https://github.com/irakoze-bruce/Phone-Store-App'
            />
            <ProjectCards
              logo={logoReact}
              name='Todo App'
              githubLink='https://github.com/irakoze-bruce/TODO-App'
            />
          </div>

          <div className={style.ProjectsContainer}>
            <ProjectCards
              logo={logoReact}
              name='Selling App'
              githubLink='https://github.com/irakoze-bruce/selling'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
