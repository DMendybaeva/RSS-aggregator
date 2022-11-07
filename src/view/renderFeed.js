export default (value, { feedsContainer }, t) => {
  const feedsContainerCard = document.createElement('div');
  feedsContainerCard.classList.add('card', 'border-0');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-body');

  const h2 = document.createElement('h2');
  h2.classList.add('card-title', 'h4');
  h2.textContent = t('feeds.title');

  const ul = document.createElement('ul');
  ul.classList.add('list-group', 'border-0', 'rounded-0');

  value.forEach(({ title, description }) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'border-0', 'border-end-0');

    const h3 = document.createElement('h3');
    h3.classList.add('h6', 'm-0');
    h3.textContent = title;

    const p = document.createElement('p');
    p.classList.add('m-0', 'small', 'text-black-50');
    p.textContent = description;
    li.append(h3, p);

    ul.append(li);
  });
  cardHeader.append(h2, ul);
  feedsContainerCard.append(cardHeader);
  feedsContainer.replaceChildren(feedsContainerCard);
};
