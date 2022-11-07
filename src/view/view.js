/* eslint-disable no-param-reassign */
import onChange from 'on-change';

import renderFeed from './renderFeed.js';
import handleFormIsValid from './handleFormIsValid.js';
import handleFormError from './handleFormError.js';

export default (
  state,
  { errorContainer, input, feedsContainer },
  t,
) => onChange(state, (path, value) => {
  switch (path) {
    case 'form.error':
      handleFormError(state, value, { errorContainer }, t);
      break;
    case 'form.isValid':
      handleFormIsValid(value, { input, feedsContainer });
      break;
    case 'feeds': {
      renderFeed(value, { feedsContainer }, t);
      break;
    }
    default:
      throw new Error(`Unknown path: ${path}`);
  }
});
