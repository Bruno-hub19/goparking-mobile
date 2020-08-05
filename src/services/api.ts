import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3434',
});

export { api };
