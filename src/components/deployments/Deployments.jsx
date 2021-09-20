import React from 'react';
import './Deployments.scss';

const Deployments = () => {
  return (
    <div>
      These are a few of the personal projects I have functional and deployed.
      <div className="deployment">
        <a href="https://ajesk.github.io/fantasy-checkdown" target="_blank" rel="noreferrer noopener">
          <h2>Fantasy Checkdown</h2>
        </a>
        <p>
          A simple tool that can be used to organize and keep track of picks in a fantasy football draft
        </p>
      </div>

      <div className="deployment">
        <a href="https://ajesk.github.io/ff-summary" target="_blank" rel="noreferrer noopener">
          <h2>FF Summary</h2>
        </a>
        <p>
          Created this tool as a way to provide some extra stats to my leagues, allowing them to see how lucky/unlucky they actually were compared to their own performance.
        </p>
      </div>

      <div className="deployment">
        <a href="https://aaronjeskie.com" target="_blank" rel="noreferrer noopener">
          <h2>This Portfolio</h2>
        </a>
        <p>
          Created this site entirely from scratch as an excuse to practice and build up some of my skills.
        </p>
      </div>
    </div>
  );
}

export default Deployments;
