/* eslint-disable no-param-reassign */
export default (activePost, { modal }) => {
  const title = modal.querySelector('.modal-title');
  title.textContent = activePost.title;

  const body = modal.querySelector('.modal-body');
  body.textContent = activePost.description;

  const href = modal.querySelector('.modal-footer > a');
  href.setAttribute('href', activePost.linkPost);
};
