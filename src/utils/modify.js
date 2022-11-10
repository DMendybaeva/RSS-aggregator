/* eslint-disable no-param-reassign */
import _ from 'lodash';

export const modifyFeeds = (feed, url) => {
  feed.idFeed = _.uniqueId('feed-');
  feed.url = url;
  return feed;
};
export const modifyPosts = ({ idFeed }, posts) => posts.forEach((post) => {
  post.idFeed = idFeed;
  post.id = _.uniqueId('');
});
