/* eslint-disable no-param-reassign */
import onChange from 'on-change';

import renderFeed from './renderFeed.js';
import renderFormIsValid from './renderFormIsValid.js';
import renderFormError from './renderFormError.js';
import renderPosts from './renderPosts.js';
import renderProcessState from './renderProcessState.js';
import renderProcessError from './renderProcessError.js';
import renderModal from './renderModal.js';
import renderShownPosts from './renderShownPosts.js';

export default (state, elements, t) => onChange(state, (path, value) => {
  switch (path) {
    case 'form.error':
      renderFormError(value, elements, t);
      break;
    case 'form.isValid':
      renderFormIsValid(value, elements);
      break;
    case 'feeds':
      renderFeed(value, elements, t);
      break;
    case 'posts':
      renderPosts(value, state, elements, t);
      break;
    case 'processState':
      renderProcessState(state, elements, t);
      break;
    case 'processError':
      renderProcessError(value, elements, t);
      break;
    case 'timerId':
      break;
    case 'uiState.activePost':
      renderModal(value, elements);
      break;
    case 'uiState.shownPostsId':
      renderShownPosts(state, elements);
      break;
    default:
      throw new Error(`Unknown path: ${path}`);
  }
});
