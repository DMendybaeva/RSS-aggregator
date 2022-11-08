/* eslint-disable no-param-reassign */
import onChange from 'on-change';

import renderFeed from './renderFeed.js';
import handleFormIsValid from './handleFormIsValid.js';
import handleFormError from './handleFormError.js';
import renderPosts from './renderPosts.js';

export default (state, elements, t) => onChange(state, (path, value) => {
  switch (path) {
    case 'form.error':
      handleFormError(state, value, elements, t);
      break;
    case 'form.isValid':
      handleFormIsValid(value, elements);
      break;
    case 'feeds': {
      renderFeed(value, elements, t);
      break;
    }
    case 'posts': {
      renderPosts(value, elements, t);
      break;
    }
    default:
      throw new Error(`Unknown path: ${path}`);
  }
});
