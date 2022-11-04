/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
}

module.exports = nextConfig

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
};