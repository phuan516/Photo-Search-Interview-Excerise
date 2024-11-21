/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { serviceURL: "http://localhost:8080/" },
};

module.exports = nextConfig;
