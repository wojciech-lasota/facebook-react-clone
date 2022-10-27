/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
