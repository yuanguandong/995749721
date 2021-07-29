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
        name: `dribbble`,
        url: `https://dribbble.com/yuanguandong`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Favori`,
        short_name: `Favori`,
        description: `Favori 重剑的个人博客`,
        lang: `zh-CN`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/assets/favicon.png"
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {},
    // },
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`
    // {
    //   resolve: `gatsby-plugin-lunr`,
    //   options: {
    //     languages: [
    //       {
    //         name: 'en'
    //       }
    //     ],
    //     fields: [
    //       { name: 'title', store: true, attributes: { boost: 20 } },
    //       { name: 'content', store: true },
    //       { name: 'tags', store: true },
    //       { name: 'excerpt', store: true },
    //       { name: 'path', store: true }
    //     ],
    //     resolvers: {
    //       MarkdownRemark: {
    //         title: node => node.frontmatter.title,
    //         content: node => node.html,
    //         tags: node => node.frontmatter.tags,
    //         excerpt: node => node.frontmatter.excerpt,
    //         path: node => node.frontmatter.path
    //       }
    //     }
    //   }
    // },
    // {
    //   resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    //   options: {
    //     // Fields to index
    //     fields: ["title", "keywords", 'excerpt', 'content'],
    //     // How to resolve each field's value for a supported node type
    //     resolvers: {
    //       // For any node of type MarkdownRemark, list how to resolve the fields' values
    //       MarkdownRemark: {
    //         title: (node) => node.frontmatter.title,
    //         keywords: (node) => node.frontmatter.keywords,
    //         content: node => node.html,
    //         tags: node => node.frontmatter.tags,
    //         excerpt: node => node.frontmatter.excerpt,
    //         path: node => node.frontmatter.path,
    //         date: node => node.frontmatter.date,
    //       },
    //     },
    //   },
    // },
    // {
    //   resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    //   options: {
    //     // Fields to index
    //     fields: ["title", "excerpt"],
    //     // How to resolve each field`s value for a supported node type
    //     resolvers: {
    //       // For any node of type MarkdownRemark, list how to resolve the fields` values
    //       MarkdownRemark: {
    //         title: (node) => node.frontmatter.title,
    //         // keywords: (node) => node.frontmatter.keywords,
    //         // content: (node) => node.html,
    //         // tags: (node) => node.frontmatter.tags,
    //         excerpt: (node) => node.frontmatter.excerpt,
    //         // path: (node) => node.frontmatter.path,
    //         date: (node) => node.frontmatter.date,
    //       },
    //     },
    //     // Optional filter to limit indexed nodes
    //     // filter: (node, getNode) => {
    //     //   return node.frontmatter.title !== "exempt";
    //     // },
    //   },
    // },
  ],
};
