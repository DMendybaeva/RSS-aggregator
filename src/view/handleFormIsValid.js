export default (value, { input, errorContainer }) => {
  if (value) {
    input.classList.remove('is-invalid');
    errorContainer.classList.remove('text-danger');
    errorContainer.classList.add('text-success');
  } else {
    input.classList.add('is-invalid');
    errorContainer.classList.remove('text-success');
    errorContainer.classList.add('text-danger');
  }
};
