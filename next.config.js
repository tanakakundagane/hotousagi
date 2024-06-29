/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /canvas\.node$/,
      use: 'ignore-loader',
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
    ];
  },
};
