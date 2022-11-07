import i18n from 'i18next';

import getWatchedState from './view/view.js';
import resources from './locales/index.js';
import { fetchData, parse, validate } from './utils/utils.js';

const runApp = (t) => {
  const state = {
    form: {
      isValid: true,
      error: null,
    },
    feeds: [],
  };

  const elements = {
    form: document.querySelector('.rss-form'),
    errorContainer: document.querySelector('.feedback'),
    input: document.querySelector('input'),
    feedsContainer: document.querySelector('.feeds'),
  };

  const watchedState = getWatchedState(state, elements, t);

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get('url');

    validate(text, t)
      .then((validatedUrl) => {
        watchedState.form.isValid = true;
        watchedState.form.error = t('successMessage');
        return fetchData(validatedUrl);
      })
      .then((response) => {
        const data = parse(response.data.contents);
        watchedState.feeds = [data, ...watchedState.feeds];
      })
      .catch((error) => {
        watchedState.form.isValid = false;
        watchedState.form.error = error.message;
      });
  });
};

export default () => {
  const i18nextInstance = i18n.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    resources,
  }).then((t) => runApp(t));
};
