import * as yup from 'yup';

export default ({ feeds }, url) => {
  yup.setLocale({
    mixed: {
      required: 'errorsMessages.required',
      notOneOf: 'errorsMessages.duplicate',
    },
    string: {
      url: 'errorsMessages.format',
    },
  });
  const schema = yup.string().required().url().notOneOf(feeds.map((feed) => feed.url));

  return schema.validate(url.trim());
};
