/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",

  basePath: "/portfolio",

  assetPrefix: "/portfolio/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = nextConfig;