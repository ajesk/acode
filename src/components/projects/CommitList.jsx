import React from 'react';
import Commit from './Commit';
import './CommitList.scss';

const CommitList = ({ commits }) => {
  return (
    <div className="commit-list">
      <h2>Recent Commits</h2>
      {
        commits.filter(commit => commit.type === 'PushEvent')
          .flatMap((event) =>
            event.payload.commits.map(commit => {
              commit.repo = event.repo.name;
              commit.created_at = event.created_at;
              return commit;
            })
          ).map((commit) =>
            <Commit key={commit.sha} commit={commit} />
          )
      }
    </div>
  );
}

export default CommitList;
