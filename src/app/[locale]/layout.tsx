import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import GlobalStyles from '@/styles/GlobalStyles';
import '@/styles/global.css';
import StyledComponentsRegistry from '../../lib/registry';
import { Open_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'NextJs 13 Boilerplate',
  description: ''
};

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${openSans.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
