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
