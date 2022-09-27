/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'robohash.org',
      'static-cdn.jtvnw.net',
    ],
  },
};
