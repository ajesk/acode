import React, { useEffect, useState } from 'react';
import './Projects.scss';
import RepositoryList from './RepositoryList';
import github from '../util/github';
import CommitList from './CommitList';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const addRepositories = (i) => setRepositories(i)
  const [repositoriesLoading, setRepositoriesLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const addEvents = (i) => setEvents(i)
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    repositoriesLoading && github.getRepositories()
      .then((res) => { addRepositories(res); })
      .then(() => setRepositoriesLoading(false));

    eventsLoading && github.getCommits()
      .then((res) => { addEvents(res); })
      .then(() => setEventsLoading(false));
  });

  return (
    <div className="projects">
      <RepositoryList repositories={repositories} />
      <CommitList commits={events} />
    </div>
  );
}

export default Projects;
