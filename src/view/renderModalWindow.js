/* eslint-disable no-param-reassign */
export default (value, { modal }) => {
  const title = modal.querySelector('.modal-title');
  const body = modal.querySelector('.modal-body');
  const href = modal.querySelector('.modal-footer > a');
  const activePost = value[0];

  title.textContent = activePost.title;
  body.textContent = activePost.description;
  href.setAttribute('href', activePost.linkPost);
};
