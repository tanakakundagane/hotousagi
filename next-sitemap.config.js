// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://hotousagi.nicework.co.jp/',
  generateRobotsTxt: true, // (Optional) Generate a robots.txt file
  // ...other options
  outDir: 'public', // 出力ディレクトリを明示的に指定
  sitemapSize: 5000, // 1つのサイトマップに含まれるURLの最大数
  changefreq: 'monthly', // 更新頻度
  priority: 0.7, // 優先度
  exclude: ['/api/*'], // 除外するパス（必要に応じて）
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/information'),
    await config.transform(config, '/userguide'),
  ],
};
