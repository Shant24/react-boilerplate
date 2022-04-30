import axios from 'axios';

import { API_CONFIG } from '@utils/constants';

export const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
