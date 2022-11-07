import * as yup from 'yup';
import i18n from 'i18next';
import axios from 'axios';

import getWatchedState from './view.js';
import resources from './locales/index.js';
import parse from './locales/parser.js';

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

  const watchedState = getWatchedState(state, elements);

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get('url');

    const schema = yup.string().trim()
      .required(t('errorsMessage.required'))
      .url(t('errorsMessage.format'));

    schema.validate(text)
      .then((validatedUrl) => {
        watchedState.form.isValid = true;
        watchedState.form.error = t('successMessage');
        return axios.get(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(validatedUrl)}`);
      })
      .then((response) => {
        const data = parse(response.data.contents);
        watchedState.feeds.unshift(data);
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
