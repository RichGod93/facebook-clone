/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "static.xx.fbcdn.net",
      "bit.ly",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
  nextConfig,
};
