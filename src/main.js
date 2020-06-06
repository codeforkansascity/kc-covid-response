// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-montserrat')
require('typeface-raleway')
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowRight, faVial, faAnalytics, faHouseUser, faGlobe } from '@fortawesome/pro-light-svg-icons'
import { faChevronUp, faChevronDown, faBars, faTimes } from '@fortawesome/pro-regular-svg-icons'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(faLongArrowRight, faVial, faAnalytics, faHouseUser, faGlobe, faChevronUp, faChevronDown, faBars, faTimes, faTwitter, faFacebook, faInstagram)

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
    (head.htmlAttrs = { lang: 'en', class: 'h-full text-comebackkc-black', style: 'overflow-y: scroll' }),
    (head.bodyAttrs = { class: 'h-full flex flex-col' })

  // Set font-awesome component globally
  Vue.component('font-awesome', FontAwesomeIcon)

  // Filter to strip html tags
  Vue.filter('striphtml', function(content) {
    return content.replace(/<\/?[^>]+(>|$)/g, '')
  })

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
      content: '/images/comebackkc-social.png'
    },
    {
      name: 'google-site-verification',
      content: 'zslkj1KAH8yqImJA-eeyYzXcDFif2WKq61AiasZ5Wxo'
    }
  )
}
