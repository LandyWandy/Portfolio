import React from 'react';

const Project = props => {

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a
        className="project-link"
        href={props.isProfessional ? undefined : link}
        target={props.isProfessional ? undefined : "_blank"}
        rel="noopener noreferrer"
      >
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          {!props.isProfessional && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
          )}
          {/* If you want to have a live link for professional projects in the future, you can conditionally render it here */}
        </div>
      </div>
    </div>
  );
};

export default Project;