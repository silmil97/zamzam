require('dotenv').config();

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'zamzamContentful',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.REACT_APP_API_TOKEN,
      spaceId: process.env.REACT_APP_API_SPACE_ID,
    },
  },
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-plugin-postcss',
  ],
};
