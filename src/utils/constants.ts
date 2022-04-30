export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export const ENVIRONMENT = {
  isDev: process.env.NODE_ENV !== 'production',
  isProd: process.env.NODE_ENV === 'production',
};

export const LOCAL_STORAGE_KEYS = {
  locale: process.env.REACT_APP_LANGUAGE_STORAGE_KEY || '',
};
