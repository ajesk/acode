import React from 'react';
import './About.scss';
const profile = require('../../resources/me.jpeg')

const About = () => {
  return (
    <div className="about">
        <img src={profile} alt="aaron profile"></img>
        <ul>
          <li>He is a full stack developer with experience ranging from embedded architecture to ui development</li>
          <li>He loves to cook, especially when trying new meals</li>
          <li>He enjoys a good glass of wine or whiskey, mainly when pairing with the food he cooks</li>
          <li>He has two cats (Vanilla & Crash) and one dog (Jace)</li>
          <li>He has a loving fiancè (to be married soon)</li>
        </ul>
      </div>
  );
}

export default About;
