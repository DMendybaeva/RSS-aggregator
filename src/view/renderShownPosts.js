export default (state, elements) => {
  const targetEl = elements.postsContainer.querySelector(`a[data-id="${state.uiState.activePost.id}"]`);
  targetEl.classList.remove('fw-bold');
  targetEl.classList.add('fw-normal', 'link-secondary');
};
