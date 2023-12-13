require('dotenv').config();

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Zamzam Göttingen',
    siteUrl: 'https://www.zamzam-goettingen.de',
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.GATSBY_TOKEN,
      spaceId: process.env.GATSBY_SPACE_ID,
    },
  },
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-plugin-postcss',
  ],
};
