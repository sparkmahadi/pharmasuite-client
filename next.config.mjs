/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['imgur.com'], // Add imgur.com to allowed domains
    },
    env: {
        BASE_URL: process.env.BASE_URL,
      }
};

export default nextConfig;