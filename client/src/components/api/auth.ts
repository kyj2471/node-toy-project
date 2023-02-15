import Axios from 'components/libraries/axios';

export const getMe = async () => {
  return Axios.get('/auth/me');
};

export const postSignUp = async (data: any) => {
  return Axios.post('/auth/signup', data);
};

export const postLogin = async (data: any) => {
  return Axios.post('/auth/login', data);
};
