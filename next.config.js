/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "purepng.com",
      "encrypted-tbn0.gstatic.com",
      "cdn-icons-png.flaticon.com",
      "e7.pngegg.com",
      "w7.pngwing.com",
    ],
  },
};

module.exports = nextConfig;
