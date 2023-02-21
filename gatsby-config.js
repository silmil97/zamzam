/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `zamzamContentful`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "TAE6Or3gG2IL1I1D9HAUqMT5_DENjbxGRHWY054SzUM",
      "spaceId": "jqq7u9aozdtr"
    }
  },
  'gatsby-plugin-image',
  `gatsby-plugin-sharp`,
  'gatsby-plugin-postcss',
  
  ]
};