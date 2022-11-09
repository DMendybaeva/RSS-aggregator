/* eslint-disable no-param-reassign */
export default (state, elements, t) => {
  switch (state.processState) {
    case 'filling': {
      break;
    }
    case 'loading': {
      break;
    }
    case 'processed': {
      elements.errorContainer.classList.remove('text-danger');
      elements.errorContainer.classList.add('text-success');
      elements.errorContainer.textContent = t('successMessage');
      break;
    }
    case 'failed': {
      elements.errorContainer.classList.remove('text-success');
      elements.errorContainer.classList.add('text-danger');
      break;
    }
    default:
      throw new Error(`Unknown processState: ${state.processState}`);
  }
};
