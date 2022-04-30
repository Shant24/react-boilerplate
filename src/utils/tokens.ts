import { StorageManager } from './StorageManager';
import { LOCAL_STORAGE_KEYS } from './constants';

export const getAccessToken = (): string | null => {
  return StorageManager.local.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY) || null;
};

export const getRefreshToken = (): string | null => {
  return StorageManager.local.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY) || null;
};
