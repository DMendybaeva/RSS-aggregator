import i18n from 'i18next';

import getWatchedState from './view/index.js';
import resources from './locales/index.js';
import { TooManyResponsesError, TO_MANY_RESPONSES_STATUS } from './utils/errors.js';
import {
  fetchData,
  parse,
  validate,
  DELAY,
  updatePosts,
  modifyFeed,
  modifyPosts,
} from './utils/index.js';

const runApp = (t) => {
  const state = {
    form: {
      isValid: false,
      error: null, // дубликат текст пусто
    },
    feeds: [], // title description linkfeed
    posts: [], // title, linkPost, linkfeed
    processState: 'filling', // loading processed failed
    processError: null, // сеть парсинг сервер
    timerId: null,
    uiState: {
      shownPostsId: new Set(),
      activePost: null,
    },
  };

  const elements = {
    form: document.querySelector('.rss-form'),
    errorContainer: document.querySelector('.feedback'),
    input: document.querySelector('input'),
    feedsContainer: document.querySelector('.feeds'),
    postsContainer: document.querySelector('.posts'),
    submitButton: document.querySelector('button[type="submit"]'),
    modal: document.querySelector('#modal'),
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
      // eslint-disable-next-line camelcase
      .then(({ data: { contents, status: { http_code, url } } }) => {
        // eslint-disable-next-line camelcase
        if (http_code === TO_MANY_RESPONSES_STATUS) {
          throw new TooManyResponsesError('tooManyResponses');
        }

        const { feed, posts } = parse(contents);
        const modifiedFeed = modifyFeed(feed, url);
        const modifiedPosts = modifyPosts(feed, posts);

        watchedState.feeds = [modifiedFeed, ...state.feeds];
        watchedState.posts = [...modifiedPosts, ...state.posts];
        watchedState.processState = 'processed';
        watchedState.timerId = setTimeout(() => updatePosts(watchedState), DELAY);

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
          case 'TypeError':
            watchedState.processError = t('errorsMessages.parsing');
            break;
          case 'TooManyResponsesError':
            watchedState.processError = t('errorsMessages.tooManyResponses');
            break;
          default:
            throw new Error(`Unknown error.name: ${error.name}`);
        }
      });
  });

  elements.postsContainer.addEventListener('click', ({ target }) => {
    const activePost = watchedState.posts.find(({ id }) => id === target.dataset.id);
    if (activePost) {
      watchedState.uiState.activePost = activePost;
      watchedState.uiState.shownPostsId.add(activePost.id);
    }
  });
};

export default () => {
  const i18nextInstance = i18n.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    resources,
  }).then((t) => runApp(t));
};
