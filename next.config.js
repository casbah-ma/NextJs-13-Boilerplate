const withTwin = require("./withTwin.js");
const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer(
  withTwin({
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "source.unsplash.com",
        },
      ],
    },
  })
);
