import createMiddleware from 'next-intl/middleware';
import { pathnames, locales } from './configs/pathnames';

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'en',
  locales,
  pathnames,
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
