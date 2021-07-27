module.exports = {
  siteMetadata: {
    title: `Favori`,
    name: `Favori's blog`,
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
        name: `dribbble`,
        url: `https://dribbble.com/yuanguandong`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-antd",
      // options: {
      //   style: true,
      // },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        // strictMath: true,
      },
    },
  ],
};
