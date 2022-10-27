/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbbx.com",
      "firebasestorage.googleapis.com",
      "scontent.fwaw3-1.fna.fbcdn.net",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
