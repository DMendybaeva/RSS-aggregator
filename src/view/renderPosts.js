export default (value, { uiState: { shownPostsId } }, { postsContainer }, t) => {
  const card = document.createElement('div');
  card.classList.add('card', 'border-0');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.append(cardBody);

  const h2 = document.createElement('h2');
  h2.classList.add('card-title', 'h4');
  cardBody.append(h2);

  const ul = document.createElement('ul');
  ul.classList.add('list-group', 'border-0', 'rounded-0');
  card.append(ul);

  value
    .forEach(({ id: postId, linkPost, title }) => {
      const li = document.createElement('li');
      li.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-start',
        'border-0',
        'border-end-0',
      );

      const wasPostShown = shownPostsId.has(postId);

      const a = document.createElement('a');
      a.setAttribute('href', linkPost);
      a.classList.add(wasPostShown ? 'fw-normal' : 'fw-bold');
      a.setAttribute('data-id', postId);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      a.textContent = title;

      const button = document.createElement('button');
      button.textContent = t('button');
      button.setAttribute('type', 'button');
      button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
      button.setAttribute('data-id', postId);
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target', '#modal');

      li.append(a, button);
      ul.append(li);
    });

  postsContainer.replaceChildren(card);
};
