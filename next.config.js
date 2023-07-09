/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/buyitnow",
    CLOUD_NAME: "droarxty8",
    CLOUDINARY_API_KEY: "477418877662747",
    CLOUDINARY_API_SECRET: "Oqu7wE_Uo-Xfg9-vjruk-aSODIk",
    NEXTAUTH_SECRET: "ecommerceprojectAnanya",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
