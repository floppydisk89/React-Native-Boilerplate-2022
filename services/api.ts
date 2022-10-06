import axios from 'axios';
import host from '../data/host';
import config from '../config/host';

const api = axios.create({
  baseURL: `${
    config.mode === 'production'
      ? host.baseUrl.production
      : host.baseUrl.development
  }/api/`,
  timeout: 1000,
  headers: { 'Cross-Origin-Resource-Policy': 'same-origin' },
});

export default api;
