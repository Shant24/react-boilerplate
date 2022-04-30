export const ENVIRONMENT = {
  isDev: process.env.NODE_ENV !== 'production',
  isProd: process.env.NODE_ENV === 'production',
};

export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
};

export const REFRESH_TOKEN_URL = '/auth/refreshToken';

export const LOCAL_STORAGE_KEYS = {
  LOCALE: process.env.REACT_APP_LANGUAGE_STORAGE_KEY || '',
  ACCESS_TOKEN_KEY: process.env.REACT_APP_ACCESS_TOKEN_STORAGE_KEY || '',
  REFRESH_TOKEN_KEY: process.env.REACT_APP_REFRESH_TOKEN_STORAGE_KEY || '',
};
