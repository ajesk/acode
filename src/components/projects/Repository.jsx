import React from 'react';
import './Repository.scss';

const Repository = ({ repo }) => {
  return (
    <div className="repo" key={repo.id}>
      <a className="repo-link" href={repo.html_url}>{repo.name}</a>
      <div className="repo-details">
        <div className="repo-left">
          <div>{repo.language ? 'Language:' : ''}</div>
          <div>Last Updated:</div>
        </div>
        <div className="repo-right">
          <div>{repo.language}</div>
          <div>{repo.updated_at}</div>
        </div>
      </div>
    </div>
  );
}

export default Repository;
