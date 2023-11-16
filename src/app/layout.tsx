import type { Metadata } from 'next';
import GlobalStyles from '@/styles/GlobalStyles';
import '@/styles/global.css';
import StyledComponentsRegistry from '../lib/registry';

export const metadata: Metadata = {
  title: 'NextJs 13 Boilerplate',
  description: ''
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
