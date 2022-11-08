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
    feeds: [], // title description linkfeed
    posts: [], // title, linkPost, linkfeed
  };

  const elements = {
    form: document.querySelector('.rss-form'),
    errorContainer: document.querySelector('.feedback'),
    input: document.querySelector('input'),
    feedsContainer: document.querySelector('.feeds'),
    postsContainer: document.querySelector('.posts'),
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
        watchedState.feeds = [data.feed, ...state.feeds];
        watchedState.posts = [...data.posts, ...state.posts];
      })
      .catch((error) => {
        watchedState.form.isValid = false;
        console.log(error);
        switch (error.name) {
          case 'AxiosError':
            watchedState.form.error = t('errorsMessages.network');
            break;
          case 'ValidationError':
            watchedState.form.error = error.message;
            break;
          default:
            throw new Error(`Unknown error.name: ${error.name}`);
        }
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
