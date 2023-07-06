import React from "react";
import './header.css';

function Header () {
  return (
    <header id="welcome">
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="aboutLine">Inspired by</span>
          <span className="aboutLine">rain 
          <span className="color"> & </span> 
           committed</span>
          <span className="aboutLine">to code.</span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

  export default Header;