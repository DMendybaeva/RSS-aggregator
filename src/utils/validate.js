import * as yup from 'yup';

export default (url, t) => {
  const schema = yup.string().trim()
    .required(t('errorsMessage.required'))
    .url(t('errorsMessage.format'));

  return schema.validate(url);
};
