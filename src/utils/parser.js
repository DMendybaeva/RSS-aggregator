export default (contents) => {
  const parser = new DOMParser();
  const parsedData = parser.parseFromString(contents, 'application/xml');

  const postsItems = parsedData.querySelectorAll('item');

  const feed = {
    title: parsedData.querySelector('title').textContent,
    description: parsedData.querySelector('description').textContent,
    linkFeed: parsedData.querySelector('link').textContent,
  };
  const posts = [...postsItems].map((post) => ({
    title: post.querySelector('title').textContent,
    linkPost: post.querySelector('link').textContent,
    linkFeed: parsedData.querySelector('link').textContent,
  }));

  const data = { feed, posts };
  return data;
};
