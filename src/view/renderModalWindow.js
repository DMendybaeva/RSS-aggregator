/* eslint-disable no-param-reassign */
export default (value, { modal }) => {
  const activePost = value[0];

  const title = modal.querySelector('.modal-title');
  title.textContent = activePost.title;

  const body = modal.querySelector('.modal-body');
  body.textContent = activePost.description;

  const href = modal.querySelector('.modal-footer > a');
  href.setAttribute('href', activePost.linkPost);

  const activePostElement = document.querySelector(`a[data-id="${activePost.id}"]`);
  activePostElement.classList.remove('fw-bold');
  activePost.classList.add('fw-normal');
};
