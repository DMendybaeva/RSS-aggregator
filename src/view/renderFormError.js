/* eslint-disable no-param-reassign */
export default (value, { errorContainer }, t) => {
  errorContainer.textContent = t(value);
};
