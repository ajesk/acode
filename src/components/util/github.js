import axios from 'axios';

const github = {
  getRepositories: async () => {
    try {
      return await axios.get('https://api.github.com/users/ajesk/repos');
    } catch (error) {
      console.error(error);
    }
  },
  getCommits: async () => {
    try {
      return await axios.get('https://api.github.com/users/ajesk/events');
    } catch (error) {
      console.error(error);
    }
  }
}

export default github;