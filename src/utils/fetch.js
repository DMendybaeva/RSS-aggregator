import axios from 'axios';

const START_URL = 'https://allorigins.hexlet.app/get?url=';

export default (url) => axios.get(`${START_URL}${encodeURIComponent(url)}`);
