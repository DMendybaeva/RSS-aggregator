/* eslint-disable no-param-reassign */
export default ({ processState }, { errorContainer, submitButton }, t) => {
  switch (processState) {
    case 'filling': {
      submitButton.disable = false;
      break;
    }
    case 'loading': {
      submitButton.disabled = true;
      break;
    }
    case 'processed': {
      submitButton.disabled = false;
      errorContainer.classList.remove('text-danger');
      errorContainer.classList.add('text-success');
      errorContainer.textContent = t('successMessage');
      break;
    }
    case 'failed': {
      submitButton.disabled = false;
      errorContainer.classList.remove('text-success');
      errorContainer.classList.add('text-danger');
      break;
    }
    default:
      throw new Error(`Unknown processState: ${processState}`);
  }
};
