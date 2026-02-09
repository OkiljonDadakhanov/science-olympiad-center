import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

import en from '../messages/en.json';
import ru from '../messages/ru.json';
import uz from '../messages/uz.json';

export const locales = ['uz', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];

const messages: Record<Locale, typeof en> = { en, ru, uz };

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as Locale]
  };
});
