/* eslint-disable no-param-reassign */
import _ from 'lodash';

export const modifyFeed = (feed, url) => {
  feed.idFeed = _.uniqueId('feed-');
  feed.url = url;
  return feed;
};

export const modifyPosts = ({ idFeed }, posts) => posts.map((post) => {
  post.idFeed = idFeed;
  post.id = _.uniqueId('post-');
  return post;
});
