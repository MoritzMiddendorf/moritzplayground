import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  console.log("requested " + locale);
  if (!locale) {
    // Handle case where locale might be undefined, e.g., default to 'en'
    return { messages: (await import(`./locales/en.json`)).default };
  }
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});