import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <h2>Facts about Aaron:</h2>
      <div className="about-detail">
        <img src="" alt="aaron profile"></img>
        <ul>
          <li>He is a full stack developer with experience ranging from embedded architecture to ui development</li>
          <li>He loves to cook, especially when trying new meals</li>
          <li>He enjoys a good glass of wine or whiskey, mainly when pairing with the food he cooks</li>
          <li>He has two cats (Vanilla & Crash) and one dog (Jace)</li>
          <li>He has a loving fiancè (to be married soon)</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
