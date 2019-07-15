module.exports = {
  siteTitle: 'SMJR',
  siteTitleAlt: 'Personal Site of SMJR', // This allows an alternative site title for SEO schema.
  publisher: 'Serge M', // Organization name used for SEO schema
  siteDescription:
    'I am a designer and full-stack developer from New York. I have been doing work with node, express and react.',
  siteUrl: 'https://smjr.us', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  postsPerHomePage: 7, // Number of posts shown on the 1st page of of the index.js template (home page)
  postsPerPage: 6, // Number of posts shown on paginated pages
  author: {
    name: 'smjr',
    url: 'https://smjr.us',
    instagram: 'https://instagram.com/michaeljoeseph809',
    github_name: '@alotoftype',
    github_url: 'https://github.com/alotoftype',
    dribble_url: 'https://dribbble.com/smjr',
    twitter_name: '@alotoftype',
  }, // Author for RSS author segment and SEO schema
  userTwitter: '@twitter', // Change for Twitter Cards
  shortTitle: 'SMJR Site', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#5ECCE0', // Used for Offline Manifest
  themeColor: '#56494C', // Used for Offline Manifest
  copyright: 'Copyright © 2019 smjr', // Copyright string for the RSS feed
}
