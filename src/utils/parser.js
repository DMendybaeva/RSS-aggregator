import _ from 'lodash';

export default (contents, url) => {
  const parser = new DOMParser();
  const parsedData = parser.parseFromString(contents, 'application/xml');

  const postsItems = parsedData.querySelectorAll('item');

  const feed = {
    title: parsedData.querySelector('title').textContent,
    description: parsedData.querySelector('description').textContent,
    idFeed: _.uniqueId('feed-'),
    url,
  };
  const posts = [...postsItems].map((post) => ({
    title: post.querySelector('title').textContent,
    linkPost: post.querySelector('link').textContent,
    idFeed: feed.idFeed,
    id: _.uniqueId(),
  }));

  const data = { feed, posts };
  return data;
};
