// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-montserrat');
require('~/main.css');

import DefaultLayout from '~/layouts/Default.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowRight, faVial, faAnalytics, faFlaskPoison } from '@fortawesome/pro-light-svg-icons';
import { faChevronUp, faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import VueGtm from 'vue-gtm';

config.autoAddCss = false;
library.add(faLongArrowRight, faVial, faAnalytics, faFlaskPoison, faChevronUp, faChevronDown, faTwitter, faFacebook, faInstagram);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
    (head.htmlAttrs = { class: 'h-full text-kc-covid-black', style: 'overflow-y: scroll' }),
    (head.bodyAttrs = { class: 'h-full flex flex-col' });

  // Set font-awesome component globally
  Vue.component('font-awesome', FontAwesomeIcon);

  // Add Google Tag Manager
  if (process.env.GRIDSOME_GTM_ID) {
    Vue.use(VueGtm, {
      id: process.env.GRIDSOME_GTM_ID
    });
  }
}
