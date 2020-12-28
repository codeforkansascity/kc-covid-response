<template>
  <div class="container content-center h-32 mx-auto">
    <div class="flex flex-col items-center justify-around h-full px-4 text-white md:flex-row md:justify-between">
      <div>
        <ul class="flex items-center mb-0">
          <li>
            <a href="https://twitter.com/comebackkc" class="underline" target="_blank"><IconTwitter class="w-auto h-6 mr-4"></IconTwitter></a>
          </li>
          <li>
            <a href="https://www.facebook.com/Comeback-KC-107935990899809/" class="underline" target="_blank" ><IconFacebook class="w-auto h-6 mr-4"></IconFacebook></a>
          </li>
          <li>
            <a href="https://www.instagram.com/comeback_kc/" class="underline" target="_blank"><IconInstagram class="w-auto h-6 mr-4"></IconInstagram></a>
          </li>
        </ul>
      </div>
      <div>
        <ul class="flex flex-col items-center justify-between mb-0 md:flex-row">
          <li v-for="nav in navItems()" :key="nav.path">
            <g-link :to="nav.path" class="mr-4 font-semibold underline uppercase">{{ nav.label }}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IconTwitter from '@/components/IconTwitter.vue'
import IconFacebook from '@/components/IconFacebook.vue'
import IconInstagram from '@/components/IconInstagram.vue'

export default {
  props: {
    language: String
  },
  components: { IconTwitter, IconFacebook, IconInstagram },
  methods: {
    navItems() {
      return this.language == 'es' ? this.$static.es_nav_items.edges[0].node.nav_items : this.$static.en_nav_items.edges[0].node.nav_items
    }
  }
}
</script>

<static-query>
query {
  en_nav_items: allSettings(filter: {path: {eq: "/data/settings/footer-nav/"}}) {
    edges {
      node {
       nav_items {
        label
        path
      } 
      }
    }
  }
  es_nav_items: allSettings(filter: {path: {eq: "/data/settings/footer-nav-es/"}}) {
    edges {
      node {
       nav_items {
        label
        path
      } 
      }
    }
  }
}
</static-query>
