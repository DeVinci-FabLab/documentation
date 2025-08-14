export const getContributors = async (commits: any) => {
  // filter out commits that don't have an author
  const commitsWithAuthors = commits.filter((commit) => !!commit.author);

  // use a Set to deduplicate the list of contributors
  const contributorSet = new Set();
  for (const commit of commitsWithAuthors) {
    contributorSet.add(JSON.stringify(commit.author));
  }

  const contributorPromises = Array.from(contributorSet).map(
    async (str: string) => {
      const contributor = JSON.parse(str);
      const { login, html_url, avatar_url } = contributor;
      const url = `https://api.github.com/users/${login}`;
      try {
        const response = await fetch(url);
        const author = await response.json();
        const username = author.name || login;
        return { username, html_url, avatar_url };
      } catch (error) {
        console.error(error);
        return { username: login, html_url, avatar_url };
      }
    }
  );

  const contributors = await Promise.all(contributorPromises);

  return contributors;
};
