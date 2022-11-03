import * as yup from 'yup';
import i18n from 'i18next';

import getWatchedState from './view.js';
import resources from './locales/index.js';

const runApp = (t) => {
  const state = {
    form: {
      isValid: true,
      error: null,
    },
  };

  const elements = {
    form: document.querySelector('.rss-form'),
    errorContainer: document.querySelector('.feedback'),
    input: document.querySelector('input'),
  };

  const watchedState = getWatchedState(state, elements);

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get('url');

    const schema = yup.string().trim()
      .required(t('errorsMessage.required'))
      .url(t('errorsMessage.format'));

    schema.validate(text).then(() => {
      watchedState.form.error = t('errorsuccessMessage');
      watchedState.form.isValid = true;
    }).catch((error) => {
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
