/* eslint-disable no-param-reassign */
export default (value, elements, t) => {
  elements.errorContainer.textContent = t(value);
};
