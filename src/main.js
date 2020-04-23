// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-raleway');
require('~/main.css');

import DefaultLayout from '~/layouts/Default.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faArrowRight);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout), (head.htmlAttrs = { class: 'h-full', style: 'overflow-y: scroll' }), (head.bodyAttrs = { class: 'h-full flex flex-col' });
  // Set font-awesome component globally
  Vue.component('font-awesome', FontAwesomeIcon);
}
