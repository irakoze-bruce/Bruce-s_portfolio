/** @format */

import React from "react";
import style from "./Home.module.css";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Home() {
  return (
    <div className={style.Home}>
      <h1 className={style.Home_title}>Hello i'm Bruce Mars</h1>
      <div className={style.Home_description}>
        <p>
          <span>
            <FaQuoteLeft />
          </span>
          Start Believing,Start Dreaming and create the life and person that you
          really want to see.
          <span>
            <FaQuoteRight />
          </span>
        </p>
      </div>
      <p>It's not that I'm so smart,It's just i stay with problem longer </p>
    </div>
  );
}

export default Home;
