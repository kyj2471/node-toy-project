import axios from 'axios';
import { Cookies } from 'react-cookie';

const useAuthInterceptor = (cookies: any) => {
  const interceptRequest = (config: any) => {
    if (cookies.get('token')) {
      config.headers.Authorization = `Bearer ${cookies.get('token')}`;
    }
    return config;
  };

  return interceptRequest;
};

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { Authorization: '' }
});

const cookies = new Cookies();
const authInterceptor = useAuthInterceptor(cookies);
instance.interceptors.request.use(authInterceptor);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
