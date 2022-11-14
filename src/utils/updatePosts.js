/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { fetchData, parse, modifyPosts } from './index.js';

export const DELAY = 5000;

export const updatePosts = (watchedState) => {
  clearTimeout(watchedState.timerId);
  const urls = watchedState.feeds.map(({ url }) => url);
  const promises = urls.map((url) => fetchData(url));
  Promise.all(promises)
    .then((responses) => {
      const updatedPosts = responses
        // eslint-disable-next-line camelcase
        .filter(({ data: { status: { http_code } } }) => http_code === 200)
        .flatMap((response, idx) => {
          const { posts } = parse(response.data.contents);
          const modifiedPosts = modifyPosts(watchedState.feeds[idx], posts);
          return modifiedPosts;
        });
      const newPosts = _.differenceBy(updatedPosts, watchedState.posts, 'linkPost');
      watchedState.posts = [...newPosts, ...watchedState.posts];
    })
    .finally(() => {
      watchedState.timerId = setTimeout(() => updatePosts(watchedState), DELAY);
    });
};
