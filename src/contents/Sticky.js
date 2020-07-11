/** @format */
import React, { Component } from "react";
import "./App.css";

class Sticky extends Component {
  state = {
    scrolled: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let istop = window.scrollY < 100;

      if (istop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
      console.log(istop);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div className={this.state.scrolled ? "scrolled" : "nav"}>
        <div className='nav_text'>
          <h1>hello</h1>
          <h1>I'm navigation text</h1>
        </div>
      </div>
    );
  }
}

export default Sticky;
