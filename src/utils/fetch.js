import axios from 'axios';

const START_URL = 'https://allorigins.hexlet.app/get';

export default (url) => {
  const newUrl = new URL(START_URL);
  newUrl.searchParams.set('disableCache', true);
  newUrl.searchParams.set('url', url);
  return axios.get(newUrl.href);
};
