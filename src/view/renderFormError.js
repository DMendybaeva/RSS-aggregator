/* eslint-disable no-param-reassign */
export default (state, value, { errorContainer }, t) => {
  errorContainer.textContent = t(value);
};
