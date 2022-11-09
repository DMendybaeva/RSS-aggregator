export default (value, { input }) => {
  if (value) {
    input.classList.remove('is-invalid');
  } else {
    input.classList.add('is-invalid');
  }
};
