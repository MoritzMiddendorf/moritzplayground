import { locales, defaultLocale } from './app/config';
import createMiddleware from 'next-intl/middleware';

// Infer the type of Locale from the locales array
type Locale = typeof locales[number];

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};