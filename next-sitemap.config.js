/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://your-domain.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404'],
  // 如果有其他需要排除的路径，可以添加到 exclude 数组中
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://your-domain.com/server-sitemap.xml', // 如果你有额外的 sitemap
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 