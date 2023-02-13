import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080'
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === '400') {
      console.log('???');
      return;
    }
  }
);

export default instance;
