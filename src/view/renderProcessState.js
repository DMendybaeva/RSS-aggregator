/* eslint-disable no-param-reassign */
export default ({ processState }, { errorContainer }, t) => {
  switch (processState) {
    case 'filling': {
      break;
    }
    case 'loading': {
      break;
    }
    case 'processed': {
      errorContainer.classList.remove('text-danger');
      errorContainer.classList.add('text-success');
      errorContainer.textContent = t('successMessage');
      break;
    }
    case 'failed': {
      errorContainer.classList.remove('text-success');
      errorContainer.classList.add('text-danger');
      break;
    }
    default:
      throw new Error(`Unknown processState: ${processState}`);
  }
};