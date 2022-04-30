import { i18n } from '@lingui/core';
import { en, ru, hy } from 'make-plural/plurals';
import { detect, fromStorage, fromNavigator } from '@lingui/detect-locale';

import { LOCAL_STORAGE_KEYS } from '@utils/constants';
import { StorageManager } from '@utils/StorageManager';

export const defaultLocale = 'en';

export type LocaleType = keyof typeof locales;

export const locales = {
  [defaultLocale]: defaultLocale,
  ru: 'ru',
  hy: 'hy',
};

export const localeNames = {
  en: 'English',
  ru: 'Russian',
  hy: 'Armenian',
};

i18n.loadLocaleData({
  [defaultLocale]: { plurals: en },
  ru: { plurals: ru },
  hy: { plurals: hy },
});

export const getLocale = (): LocaleType => {
  const foundLocale = detect(fromStorage(LOCAL_STORAGE_KEYS.LOCALE), fromNavigator, () => defaultLocale) || '';

  return (getIsAllowedLocale(foundLocale) ? foundLocale : defaultLocale) as LocaleType;
};

export const dynamicActivateLocale = async (locale: LocaleType | string, needToSetToLocalStorage: boolean = true) => {
  const { messages } = await import(`/src/configs/i18n/locales/${locale}/messages`);

  i18n.load(locale, messages);
  i18n.activate(locale);
  document.documentElement.lang = locale;

  if (needToSetToLocalStorage) {
    StorageManager.local.setItem(LOCAL_STORAGE_KEYS.LOCALE, locale, false);
  }
};

export const getIsAllowedLocale = (locale?: string) => {
  return Object.keys(locales).includes(locale || '');
};

export { i18n };
