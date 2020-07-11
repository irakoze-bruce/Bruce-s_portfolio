/** @format */

import React, { useState, useEffect } from "react";
import "./App.css";

const Scroll = (props) => {
  const [Scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let istop = window.scrollY < 100;

      if (istop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      console.log(istop);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("remov");
      });
    };
  }, []);

  return (
    <div className={Scrolled ? "scrolled" : "nav"}>
      <div className='nav_text'>
        <h1>hello</h1>
        <h1>I'm navigation text</h1>
      </div>
    </div>
  );
};

export default Scroll;
