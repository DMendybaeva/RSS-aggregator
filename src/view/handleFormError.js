/* eslint-disable no-param-reassign */
export default (state, value, { errorContainer }, t) => {
  if (state.form.isValid) {
    errorContainer.classList.remove('text-danger');
    errorContainer.classList.add('text-success');
  }
  errorContainer.textContent = t(value);
};
