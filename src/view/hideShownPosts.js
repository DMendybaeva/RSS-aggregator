export default (shownPostsId, elements) => {
  const shownPostsElements = elements.postsContainer.querySelectorAll('a');

  shownPostsElements.forEach((postElement) => {
    const postElementId = postElement.dataset.id;
    if (shownPostsId.has(postElementId)) {
      postElement.classList.remove('fw-bold');
      postElement.classList.add('fw-normal');
    }
  });
};
