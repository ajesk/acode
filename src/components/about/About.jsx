import React from 'react';
import './About.scss';
const profile = require('../../resources/me.jpeg')

const About = () => {
  return (
    <div className="about">
        <img src={profile} alt="aaron profile"></img>
        <ul>
          <li>He is a full stack developer with experience ranging from embedded architecture to ui development</li>
          <li>He enjoys cooking</li>
          <li>He enjoys trying craft beers/whiskey/wine</li>
          <li>He recently picked up woodworking as a hobby</li>
          <li>He has a loving fiancè (to be married soon)</li>
          <li>He has two cats (Vanilla & Crash) and one dog (Jace)</li>
        </ul>
      </div>
  );
}

export default About;
