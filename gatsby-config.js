module.exports = {
  siteMetadata: {
    title: `Favori 重剑的博客`,
    name: `Favori 重剑`,
    siteUrl: `https://favori.netlify.app/`,
    description: `Favori's blog , 重剑的个人博客`,
    hero: {
      heading: `重剑无锋，大巧不工。`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/yuanguandong`,
      },
      {
        url: `https://favori.zcool.com.cn/`,
      },
      {
        url: "https://codepen.io/favori",
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Favori`,
        short_name: `Favori`,
        description: `Favori 重剑的个人博客`,
        lang: `zh-CN`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: "src/assets/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-antd",
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {},
    },
  ],
};
