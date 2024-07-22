import API from 'src/instance/api';
import instance from 'src/instance/instance';

export const loginApi = async (payload) => {
  const resp = await instance.post(API.auth.login, payload);
  return resp.data;
};
