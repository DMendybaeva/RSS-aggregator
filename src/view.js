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
      } else {
        input.classList.add('is-invalid');
      }
      break;
    default:
      break;
  }
});
