import * as yup from 'yup';

export default (url) => {
  yup.setLocale({
    mixed: {
      required: 'errorsMessages.required',
      // notOneOf: 'errorsMessages.duplicate',
    },
    string: {
      url: 'errorsMessages.format',
    },
  });
  const schema = yup.string().required().url();

  return schema.validate(url.trim());
};
