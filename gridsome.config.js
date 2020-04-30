// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss(require('./purgecss.config.js')));
}

module.exports = {
  siteName: 'Come Back KC',
  siteUrl: 'https://www.comebackkc.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/faqs/**/*.md',
        typeName: 'FAQ',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-5RZCR8S',
        enabled: process.env.GTM_ENABLED ? true : false,
        debug: true
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
