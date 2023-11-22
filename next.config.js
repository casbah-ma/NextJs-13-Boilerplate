const withTwin = require('./withTwin.js');
const { withContentlayer } = require('next-contentlayer');
const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts'
);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withNextIntl(
  withContentlayer(
    withTwin({
      reactStrictMode: true,
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
          {
            protocol: 'https',
            hostname: 'source.unsplash.com'
          }
        ]
      }
    })
  )
);
