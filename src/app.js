import * as yup from 'yup';
import getWatchedState from './view.js';

export default () => {
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
      .required('Please, provide RSS link')
      .url('RSS link must be a valid URL');

    schema.validate(text).then(() => {
      watchedState.form.error = '';
      watchedState.form.isValid = true;
    }).catch((error) => {
      watchedState.form.isValid = false;
      watchedState.form.error = error.message;
    });
  });
};
