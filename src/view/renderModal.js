/* eslint-disable no-param-reassign */
export default ({
  title: actPostTitle,
  description: actPostDescription,
  linkPost: actLinkPost,
}, { modal }) => {
  const title = modal.querySelector('.modal-title');
  title.textContent = actPostTitle;

  const body = modal.querySelector('.modal-body');
  body.textContent = actPostDescription;

  const href = modal.querySelector('.modal-footer > a');
  href.setAttribute('href', actLinkPost);
};
