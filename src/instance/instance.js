// services/api.js

import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'https://devstree-api.kiwimi.vn/api/v1/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const isAuthenticated = Cookies.get('isAuthenticated');
    if (isAuthenticated) {
      config.headers.Authorization = `Bearer ${isAuthenticated}`;
    }
    return config;
  },
  (error) => {
    console.log(error, 'error');
    return Promise.reject(error);
  }
);

export default instance;
