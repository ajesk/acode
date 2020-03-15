import React from 'react';
import './Commit.scss';

const Commit = ({ commit }) => {
  return (
    <div className="commit" key={commit.sha}>
      <div className="commit-top">
        <div className="commit-detail">{commit.repo}</div> |
        <div className="commit-detail">{commit.message}</div> |
        <div className="commit-detail">{commit.created_at}</div>
      </div>
      <div className="commit-bottom">
        <div className="commit-detail sha">{commit.sha}</div>
      </div>
    </div>
  );
}

export default Commit;
