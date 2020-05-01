// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-montserrat');
require('typeface-raleway');
require('~/main.css');

import DefaultLayout from '~/layouts/Default.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowRight, faVial, faAnalytics, faHouseUser } from '@fortawesome/pro-light-svg-icons';
import { faChevronUp, faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faLongArrowRight, faVial, faAnalytics, faHouseUser, faChevronUp, faChevronDown, faTwitter, faFacebook, faInstagram);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
    (head.htmlAttrs = { class: 'h-full text-comebackkc-black', style: 'overflow-y: scroll' }),
    (head.bodyAttrs = { class: 'h-full flex flex-col' });

  // Set font-awesome component globally
  Vue.component('font-awesome', FontAwesomeIcon);

  // Add default meta data
  head.meta.push(
    {
      name: 'og:title',
      content: 'Comeback KC'
    },
    {
      name: 'og:description',
      content:
        "Kansas City never quits. No matter the odds we always find a way to come together and overcome. Today is no different. Let's bring KC back the right way - safely and responsibly - to ensure that we come back better and stronger than ever."
    },
    {
      name: 'og:image',
      content: ''
    },
    {
      name: 'og:url',
      content: 'https://www.comebackkc.com'
    }
  );
}
