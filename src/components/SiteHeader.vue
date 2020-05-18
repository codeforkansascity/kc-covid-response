<template>
  <div class="flex items-center h-full">
    <div class="container items-center justify-between hidden h-full px-4 mx-auto md:flex">
      <div class="flex items-center justify-start w-1/2">
        <g-link :to="homePageUrl"><img class="h-32" src="/images/site-logo.png" alt="Comeback KC logo"/></g-link>
      </div>
      <div class="flex flex-col items-end justify-between w-1/2 h-full py-4">
        <div class="h-1/3">
          <g-link class="text-sm font-semibold text-white underline uppercase" :to="otherLanguageLink">
            <font-awesome class="mr-2" :icon="['fal', 'globe']"></font-awesome>{{ otherLanguageLabel }}
          </g-link>
        </div>
        <nav class="h-1/3">
          <ul class="inline-flex">
            <li v-for="(nav, index) in navItems()" :key="nav.path" :class="{ 'mr-4': index != navItems().length - 1 }">
              <g-link class="font-semibold text-white underline uppercase" :to="nav.path">{{ nav.label }}</g-link>
            </li>
          </ul>
        </nav>
        <div class="h-1/3"></div>
      </div>
    </div>
    <div class="flex items-center justify-end w-full md:hidden">
      <div class="container flex items-center justify-between px-4 mx-auto">
        <div class="w-1/3"></div>
        <div class="flex items-center justify-center w-1/3">
          <g-link to="/"><img class="h-16" src="/images/site-logo.png" alt="Comeback KC logo"/></g-link>
        </div>
        <div class="flex items-center justify-end w-1/3">
          <font-awesome v-if="open" @click="toggle" class="my-6 mr-6 text-white" :icon="['far', 'times']" size="2x"></font-awesome>
          <font-awesome v-else @click="toggle" class="mr-4 text-white" :icon="['far', 'bars']" size="2x"></font-awesome>
        </div>
      </div>
    </div>
    <div v-if="open" class="fixed left-0 w-full h-full overflow-auto top-20 bg-comebackkc-darkblue">
      <nav>
        <ul class="flex flex-col items-center">
          <li class="w-full py-8 text-center border-t border-b border-m4m-gray">
            <g-link class="font-semibold text-white underline uppercase" :to="otherLanguageLink">
              <font-awesome class="mr-2" :icon="['fal', 'globe']"></font-awesome>{{ otherLanguageLabel }}
            </g-link>
          </li>
          <li v-for="nav in navItems()" :key="nav.path" class="w-full py-8 text-center border-b border-m4m-gray">
            <g-link class="font-semibold text-white underline uppercase" :to="nav.path">{{ nav.label }}</g-link>
          </li>
        </ul>
      </nav>
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script>
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  props: {
    language: String
  },
  components: { SiteFooter },
  data() {
    return {
      open: false
    }
  },
  computed: {
    homePageUrl() {
      return this.language == 'es' ? '/es' : '/'
    },
    otherLanguageLink() {
      return this.language == 'es' ? '/' : '/es'
    },
    otherLanguageLabel() {
      return this.language == 'es' ? 'English' : 'Español'
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    navItems() {
      return this.language == 'es' ? this.$static.es_nav_items.edges[0].node.nav_items : this.$static.en_nav_items.edges[0].node.nav_items
    }
  },
  mounted() {
    this.open = this.isOpen
  }
}
</script>

<static-query>
query {
  en_nav_items: allSettings(filter: {path: {eq: "/data/settings/main-nav/"}}) {
    edges {
      node {
       nav_items {
        label
        path
      } 
      }
    }
  }
  es_nav_items: allSettings(filter: {path: {eq: "/data/settings/main-nav-es/"}}) {
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
