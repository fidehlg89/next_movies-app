/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: "mysql://root:1234@localhost:3306/movies_db",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
