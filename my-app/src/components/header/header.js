import React from "react";
import './header.css';

function Header () {
  return (
    <header id="welcome">
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="aboutLine">Hi, I'm Landon,</span>
          <span className="aboutLine"> Full Stack Developer
          <span className="color"> & </span> 
          </span>
          <span className="aboutLine">Perpetual Tinkerer</span>
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