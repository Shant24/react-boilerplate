import { StorageManager } from '@utils/StorageManager';
import { LOCAL_STORAGE_KEYS } from '@utils/constants';

export const initDebuggerForTesting = () => {
  window.onkeydown = (e) => {
    if (e.key === '∂') {
      // eslint-disable-next-line no-debugger
      debugger;
    }
  };
};

export const uppercaseFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const recursiveSetInObject = (obj: Record<string, any>, keys: string[], value: any) => {
  const key = keys[0];

  if (keys.length > 1) {
    if (!obj[key]) {
      obj[key] = {};
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recursiveSetInObject(obj[key] as Record<string, any>, keys.slice(1), value);
  } else {
    obj[key] = value;
  }
};

interface IAuthData {
  accessToken: string;
  refreshToken: string;
}

export const setLocaleStorageAuthData = ({ accessToken, refreshToken }: IAuthData) => {
  StorageManager.local.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY, accessToken);
  StorageManager.local.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY, refreshToken);
};
