/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/brvq4yqb/production/**",
      },
    ],
  },
  distDir: "build",
};

module.exports = nextConfig;
