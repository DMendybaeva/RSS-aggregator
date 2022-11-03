/* eslint-disable no-param-reassign */
import onChange from 'on-change';

export default (state, { errorContainer, input }) => onChange(state, (path, value) => {
  switch (path) {
    case 'form.error':
      errorContainer.textContent = value;
      break;
    case 'form.isValid':
      if (value) {
        input.classList.remove('is-invalid');
        errorContainer.classList.remove('text-danger');
        errorContainer.classList.add('text-success');
      } else {
        input.classList.add('is-invalid');
        errorContainer.classList.remove('text-success');
        errorContainer.classList.add('text-danger');
      }
      break;
    default:
      break;
  }
});
