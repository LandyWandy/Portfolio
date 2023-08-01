import React from 'react';
import Project from './project';
import './projects.css';
import SentineticImg from './Images/Sentinetic.jpg'
import TaskHubImg from './Images/TaskHub.jpg'
import PortfolioImg from './Images/Portfolio.jpg'

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of some of the projects I've been working on lately. All of these
            were built during my coding bootcamp adventure at{' '}
            <a href="https://techbootcamps.utexas.edu/coding/" target="_blank" rel="noopener noreferrer">
              UT Austin
            </a>
            , where I coded for almost 7 months non-stop until I completed all the projects
            required to get my Full-Stack Developer certification.
          </p>
        </div>
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
            <small>Front-End: React, Photoshop, Bootstrap, SCSS</small>
            <p>
                A creatively built showcase of my skills and projects, developed using React and other modern technologies post Full-Stack bootcamp graduation.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;