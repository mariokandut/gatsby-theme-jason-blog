require('dotenv').config();

const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Jason’s Blog Theme — It’s SICK',
    description: `
      This is a blog theme. The description will be showed in SEO results on pages
      without their own descriptions.
    `,
    siteUrl: 'https://example.com',
    image: 'https://lengstorf.com/images/jason-lengstorf.jpg',
    author: {
      name: 'Your Name',
      minibio: `
        This bio is shown at the bottom of each blog post. It supports
        <strong>custom HTML</strong> if you’re into that sort of thing.
      `,
    },
    organization: {
      name: 'Example, Inc.',
      url: 'https://example.com',
      logo: 'https://lengstorf.com/android-chrome-512x512.png',
    },
    social: {
      twitter: '@jlengstorf',
      fbAppID: '',
    },
    categories: [
      {
        slug: 'test',
        name: 'Test Category',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: 'gatsby-remark-responsive-iframe' },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-numbered-footnotes' },
          { resolve: 'gatsby-remark-smartypants' },
          { resolve: 'gatsby-remark-code-titles' },
          { resolve: 'gatsby-remark-prismjs' },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-smartypants',
        ],
      },
    },
  ],
};
