import React from 'react';
import './about.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who is this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Landon Heaney.</h4>
            <p>
              I am a Full-Stack Developer based in Austin, Texas.
            </p>
            <p>
            I have two years of experience in technical operations management and recently leveled up with a Full-Stack Development certification. Don't be fooled by the tech talk though - I've also done my time behind an espresso machine. Whether it's perfecting a double shot or a chunk of JavaScript, I love a good challenge. When I'm not diving into code or reminiscing about my barista days, you'll likely find me scaling a rock wall at the local bouldering gym. And on those quiet rest days, you can catch me watching a gripping horror movie with my cat.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, React, HTML5 and CSS3. I have experience with Electron, JQuery, Bootstrap, and version control with Git. 
            </p>
            <p>
              For the back-end I work with Node.js and Python. I am experienced with MongoDB, MySQL, GraphQL and Jest. I also have a firm foundation in database management, network management, and the use of Bash and Powershell scripts for bug troubleshooting and fixes.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a project manager.</h4>
            <p>
              I have managed the uptime for a network of 21,000 devices nationwide at GroceryTV, effectively discovering and resolving device-related issues. I also developed software for and led a project to deliver firmware updates to a shipment of 2,000 devices within a week due to a manufacturer's error. In my projects, I've been able to make a significant positive impact on network health and reduce the need for device replacements.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
