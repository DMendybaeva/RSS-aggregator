/* eslint-disable no-param-reassign */
import onChange from 'on-change';

export default (
  state,
  {
    errorContainer,
    input,
    feedContainer,
  },
) => onChange(state, (path, value) => {
  switch (path) {
    case 'form.error':
      if (state.form.isValid) {
        errorContainer.classList.remove('text-danger');
        errorContainer.classList.add('text-success');
      }
      errorContainer.textContent = value;
      break;
    case 'form.isValid':
      if (value) {
        input.classList.remove('is-invalid');
        errorContainer.classList.remove('text-danger');
        errorContainer.classList.add('text-success');
      } else {
        input.classList.add('is-invalid');
        errorContainer.classList.remove('text-success');
        errorContainer.classList.add('text-danger');
      }
      break;
    case 'feeds': {
      const feedContainerCard = document.createElement('div');
      feedContainerCard.classList.add('card', 'border-0');

      const cardHeader = document.createElement('div');
      cardHeader.classList.add('card-body');

      const headerH2 = document.createElement('h2');
      headerH2.classList.add('card-title', 'h4');
      headerH2.textContent = 'Фиды';

      const headerUl = document.createElement('ul');
      headerUl.classList.add('list-group', 'border-0', 'rounded-0');

      value.map((feed) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'border-0', 'border-end-0');

        const h3 = document.createElement('h3');
        h3.classList.add('h6', 'm-0');
        h3.textContent = feed.title;

        const p = document.createElement('p');
        p.classList.add('m-0', 'small', 'text-black-50');
        p.textContent = feed.description;
        li.append(h3, p);

        return headerUl.append(li);
      });
      cardHeader.append(headerH2, headerUl);
      feedContainerCard.append(cardHeader);
      feedContainer.replaceChildren(feedContainerCard);
      break;
    }
    default:
      break;
  }
});
