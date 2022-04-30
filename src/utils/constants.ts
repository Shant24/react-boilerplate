export const ENVIRONMENT = {
  isDev: process.env.NODE_ENV !== 'production',
  isProd: process.env.NODE_ENV === 'production',
};

export const STORAGE_KEYS = {
  locale: process.env.REACT_APP_LANGUAGE_STORAGE_KEY,
};
