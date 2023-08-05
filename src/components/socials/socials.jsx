import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/landon-heaney-93a24924b/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's LinkedIn profile"
      >
        {' '}
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/LandyWandy"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;