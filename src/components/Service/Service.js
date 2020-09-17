/** @format */

import React from "react";
import style from "./Service.module.css";
import Service1 from "../../assets/images/service/s1.png";
import Service2 from "../../assets/images/service/s2.png";
import Service3 from "../../assets/images/service/s3.png";
//import Service4 from "../../assets/images/service/s4.png";

function Service() {
  return (
    <div className={style.Service}>
      <h3>SERVICE OFFERS</h3>

      <div className={style.ServiceRow}>
        <div className={style.ServiceCard}>
          <div className={style.ServiceCardImage}>
            <img src={Service1} title='web dev' alt='Service pc' />
          </div>

          <div className={style.ServiceCardText}>
            <h4>WEB DEVELOPMENT</h4>
            <p>
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
        </div>

        <div className={style.ServiceCard}>
          <div className={style.ServiceCardImage}>
            <img src={Service2} title='web design' alt='Service1 pc' />
          </div>

          <div className={style.ServiceCardText}>
            <h4>WEB DESIGN</h4>
            <p>
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
        </div>

        <div className={style.ServiceCard}>
          <div className={style.ServiceCardImage}>
            <img src={Service3} title='web dev' alt='Service2 pc' />
          </div>

          <div className={style.ServiceCardText}>
            <h4>DEPLOYMENT</h4>
            <p>
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
