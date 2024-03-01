/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
  },
  env: {
    NOTION_DATABASE_ID: "51b1c5db34e24dbb8e38ff01139a6e07",
    NOTION_INTERNAL_INTEGRATION_TOKEN:
      "secret_N0XxyyOsDhmmLImH41H26A8mVq8AAMeh2qSBYIt3L7Z",
    NEXT_CMC_PRO_API_KEY: "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
  },
};

module.exports = nextConfig;
