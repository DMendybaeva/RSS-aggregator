/* eslint-disable no-param-reassign */
export default ({ title, description, linkPost }, { modal }) => {
  const modalTitle = modal.querySelector('.modal-title');
  modalTitle.textContent = title;

  const body = modal.querySelector('.modal-body');
  body.textContent = description;

  const href = modal.querySelector('.modal-footer > a');
  href.setAttribute('href', linkPost);
};
