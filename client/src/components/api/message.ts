import Axios from 'components/libraries/axios';

export const getMsg = async () => {
  return Axios.get('/messages');
};

export const postMsg = async (data: any) => {
  return Axios.post('/messages', data);
};

export const deleteMsg = async (id: any) => {
  return Axios.delete(`/messages/${id}`);
};

export const updateMsg = async (id: any, data: any) => {
  return Axios.put(`messages/${id}`, data);
};
