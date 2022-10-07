import axios from 'axios';
import config from '../../config/host';

const api = axios.create({
  baseURL: `${
    config.mode === 'production'
      ? config.baseUrl.production
      : config.baseUrl.development
  }/api/`,
  timeout: 1000,
  headers: { 'Cross-Origin-Resource-Policy': 'same-origin' },
});

export default api;
