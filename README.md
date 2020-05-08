# KC Covid Response Website

This is a simple static site generated using Gridsome.

## Installation and Build

The following steps are the standard steps for building a Gridsome site. The should be run from the top level directory of this repo.

1. `npm install --global @gridsome/cli` to install the Gridsome CLI.
2. `npm install` to install all of the project dependencies.
3. `gridsome develop` to run a local development server.
4. `gridsome build` to generate the site for deployment (in the dist directory).

## Build Notes

There are two environment variables that the build uses when generating the site.

- FONTAWESOME_NPM_AUTH_TOKEN - This is the token required to use the pro version of Fontawesome. You can get it from your [account](https://fontawesome.com/account) page after you've registered for a pro account.
- GTM_ENABLED - Set this variable to enable GTM in the build.

## Technical Overview

This section is intended to give a developer a high level view of how the site is constructed so they know where to start when making changes.

### Static Site Generation

The site is generating using a standard [Gridsome](https://gridsome.org/) setup using the following additional tools/technologies.

- [Tailwindcss](https://tailwindcss.com/) for styles.
- [Netlify CMS](https://www.netlifycms.org/) to manage pages/content from markdown files stored in /content (see CMS section below).
- [Fontawesome](https://fontawesome.com/) for iconography. Note that the pro version is used for some icons and the site is using the license owned by Karl Kedrovsky.
- [MailChimp](https://mailchimp.com/) for gathering email newsletter subscriptions.
- [Google Fonts](https://fonts.google.com/) for the custom fonts.

The package.json file has all the details regarding packages used to integrate all of the above technologies and resources.

### CMS

The key goals for the site were simplicity and speed. The approach described below means that everything needed to generate and maintain the site can be kept in a single git repository. It also means that all of the content is available, and can be maintained, without using the CMS at all - just edit the markdown and/or yaml files directly.

The [Netlify CMS](https://www.netlifycms.org/) is used to manage markdown files containing site content stored in /content and site settings (navigation) stored in /data. It's important to note that not all content is managed by the CMS, to get things done quickly some pages (e.g. home page) are implemented using .vue files in the /src/pages directory.

The Netlify CMS files are stored under /src/admin, the config.yml file in the that directory contains all of the configuration imformation.

The following content types are used to manage content on the site.

- Page - "Plain" pages such as the privacy policy and terms and conditions pages.
- FAQ - FAQs listed on the home page.
- Update - Pages under /news-updates
- Resource - Pages under /covid-19-resources

There are also two yaml files under /data/settings that are used to define the main and footer navigation links.

### Hosting

Hosting is assumed to be Netlify which also handles the automated [build and deployment process](https://gridsome.org/docs/deploy-to-netlify/). The only Netlify specific functionality used is for [redirects](https://docs.netlify.com/routing/redirects/) which looks for a "\_redirects" file at the root of the site. This file can be found at /static/\_redirects.
