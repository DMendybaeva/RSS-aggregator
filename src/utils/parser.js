export default (contents) => {
  const parser = new DOMParser();
  const parsedData = parser.parseFromString(contents, 'application/xml');
  const feed = {
    title: parsedData.querySelector('title').textContent,
    description: parsedData.querySelector('description').textContent,
  };
  return feed;
};
