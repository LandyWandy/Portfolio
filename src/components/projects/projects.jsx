import React from 'react';
import Project from './project';
import './projects.css';
import SentineticImg from './Images/Sentinetic.jpg'
import TaskHubImg from './Images/TaskHub.jpg'
import PortfolioImg from './Images/Portfolio.jpg'
import LandonBerryImg from './Images/LandonBerry.jpg'
import FieldToolsImg from './Images/FieldTools.jpeg'

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Professional Works</h3>
          <p className="separator" />
          <p className="subtitle">
          Here's a peek at the projects I've dived into in the professional world. These aren't just lines of code; they're real solutions making waves in actual businesses!
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="LandonBerry"
            img={LandonBerryImg}
            isProfessional={true}
          >
            <small>
              Main Technologies: Raspberry Pi, Python, Bash, ADB, QEMU, GFX hat, Systemd, Debian Linux, AWS
            </small>

            <p>
            A Raspberry Pi-based tool designed for swift diagnosis and repair of company displays, consistently updated and synchronized via AWS.
            </p>
          </Project>
          <Project
            title="Field Tools"
            img={FieldToolsImg}
            isProfessional={true}
          >
            <small>
              Main Technologies: Bash, ADB, grep, awk, Makefile
            </small>
            <p>
                  A robust CLI interface designed for the efficient management and diagnosis of device issues. Operating in Bash and initiated through a Makefile for streamlined access, the tool leverages ADB for direct device interactions.
            </p>
          </Project>
        </div>
        <div className="heading">
          <h3 className="title">Personal Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Dive into a collection of personal projects I've passionately crafted, showcasing a range of skills from frontend design to intricate backend integrations.
          </p>
          <div className="projects-wrapper">
          <Project
            title="Sentinetic"
            img={SentineticImg}
            link="https://sentinetic-987fae0a7fa7.herokuapp.com/"
            repo="https://github.com/LandyWandy/Sentinetic/tree/main"
          >
            <small>
              Front-End: React, Bootstrap, CSS
            </small>
            <br></br>
            <small>
                Back-End: Node.js, Express.js, MongoDB, GraphQL, Mongoose ODM, Apollo, JWT
            </small>
            <p>
                A potent full-stack application that utilizes GPT-3.5 AI to harness Twitter data and skillfully perform sentiment analysis.
            </p>
          </Project>
          <Project
            title="Taskhub"
            img={TaskHubImg}
            link="https://taskhub.herokuapp.com/login"
            repo="https://github.com/judemdonahue/TaskHub"
          >
            <small>
              Front-End: Handlebars, Bootstrap, SCSS
            </small>
            <br></br>
            <small>
              Back-End: Node.js, Express.js, Passport, MySQL, Sequelize MVC
            </small>
            <p>
                A dynamic full-stack social platform that gamifies your daily tasks, transforming routine into an exciting, competitive experience.
            </p>
          </Project>
          <Project
            title="Portfolio"
            img={PortfolioImg}
            link="https://www.landonheaney.com"
            repo="https://github.com/LandyWandy/Portfolio"
          >
            <small>Front-End: React, Bootstrap, SCSS</small>
            <p>
                A creatively built showcase of my skills and projects, crafted using React and an array of modern technologies.
            </p>
          </Project>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;