/* eslint-disable no-param-reassign */
import { fetchData } from './utils.js';

export const DELAY = 5000;

export const updatePosts = (state) => {
  clearTimeout(state.timerId);
  const urls = state.feeds.map(({ url }) => url);
  const promises = urls.map((url) => fetchData(url));
  Promise.all(promises);
  state.timerId = setTimeout(() => updatePosts(state), DELAY);
};
