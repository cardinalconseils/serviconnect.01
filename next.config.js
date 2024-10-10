/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable SWC minification
  images: {
    domains: ['placeholder.com']
  },
};

module.exports = nextConfig;