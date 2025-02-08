module.exports = {
    siteMetadata: {
      title: `My Arweave Blog`,
      description: `A blog built with Gatsby and deployed to Arweave`,
      author: `@yourusername`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blog`,
          path: `${__dirname}/src/content/blog`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [],
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
  }