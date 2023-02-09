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
      "accessToken": "vk2GmIcUsuXNx8pqH15nLxVNsJReBIwFMdDKtm5MhNY",
      "spaceId": "jqq7u9aozdtr"
    }
  }]
};