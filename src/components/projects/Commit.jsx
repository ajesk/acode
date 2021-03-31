import React from 'react';
import './Commit.scss';

const Commit = ({ commit }) => {
  return (
    <div className="commit" key={commit.sha}>
      <div className="commit-left">
        <div className="commit-repo">{commit.repo}</div>
        <div className="commit-time">{commit.created_at}</div>
      </div>
      <div className="commit-right">
        <div className="commit-message">{commit.message}</div>
        <div className="sha">{commit.sha}</div>
      </div>
    </div>
  );
}

export default Commit;
