import i18n from 'i18next';

import getWatchedState from './view/view.js';
import resources from './locales/index.js';
import { fetchData, parse, validate } from './utils/utils.js';
import { modifyFeed, modifyPosts } from './utils/modify.js';

const runApp = (t) => {
  const state = {
    form: {
      isValid: false,
      error: null, // дубликат текст пусто
    },
    feeds: [], // title description linkfeed
    posts: [], // title, linkPost, linkfeed
    processState: 'filling', // loading processed failed
    processError: null, // сеть парсинг
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

    validate(state, text)
      .then((validatedUrl) => {
        watchedState.form.isValid = true;
        watchedState.processState = 'loading';
        return fetchData(validatedUrl);
      })
      .then((response) => {
        const { url } = response.data.status;
        const data = parse(response.data.contents, url);
        const modifiedFeed = modifyFeed(data.feed, url);
        const posts = modifyPosts(data.feed, data.posts);

        watchedState.feeds = [modifiedFeed, ...state.feeds];
        watchedState.posts = [...posts, ...state.posts];
        watchedState.processState = 'processed';

        elements.form.reset();
        elements.input.focus();
      })
      .catch((error) => {
        watchedState.form.isValid = false;
        watchedState.processState = 'failed';
        switch (error.name) {
          case 'AxiosError':
            watchedState.processError = t('errorsMessages.network');
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
