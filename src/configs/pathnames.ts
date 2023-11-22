import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/'
  //   '/pathnames': {
  //     en: '/',
  //     fr: '/'
  //   }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
