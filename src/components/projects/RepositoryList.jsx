import React from 'react';
import Repository from './Repository';
import './RepositoryList.scss';

const RepositoryList = ({ repositories }) => {
  return (
    <div className="repository-list">
      <h2>Repositories</h2>

      {repositories.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
        .map(repo =>
          <Repository repo={repo} />
        )}
    </div>
  );
}

export default RepositoryList;
