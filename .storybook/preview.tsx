import type { Preview } from '@storybook/react';
import { Open_Sans } from 'next/font/google';
import GlobalStyles from '../src/styles/GlobalStyles';
import React from 'react';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open'
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <main className={`${openSans.variable}`}>
        <GlobalStyles />
        <Story />
      </main>
    )
  ]
};

export default preview;