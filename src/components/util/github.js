const github = {
  getRepositories: async () => {
    try {
      return await fetch('https://api.github.com/users/ajesk/repos').then(r => r.json());
    } catch (error) {
      console.error(error);
    }
  },
  getCommits: async () => {
    try {
      return await fetch('https://api.github.com/users/ajesk/events').then(r => r.json());
    } catch (error) {
      console.error(error);
    }
  }
}

export default github;