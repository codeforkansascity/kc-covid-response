<template>
  <div class="flex items-center h-full">
    <div class="hidden md:flex px-4 container mx-auto items-center justify-between">
      <div class="w-1/2 flex items-center justify-start">
        <g-link to="/"><img class="h-32" src="/images/site-logo.png" alt="Comeback KC logo"/></g-link>
      </div>
      <nav class="flex w-1/2 items-center justify-end">
        <ul class="inline-flex">
          <li v-for="nav in $static.nav_items.edges[0].node.nav_items" :key="nav.path" class="mr-4">
            <g-link class="text-white uppercase underline font-semibold" :to="nav.path">{{ nav.label }}</g-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex md:hidden w-full items-center justify-end">
      <div class="flex px-4 container mx-auto items-center justify-between">
        <div class="w-1/3"></div>
        <div class="w-1/3 flex items-center justify-center">
          <g-link to="/"><img class="h-16" src="/images/site-logo.png" alt="Comeback KC logo"/></g-link>
        </div>
        <div class="w-1/3 flex items-center justify-end">
          <font-awesome v-if="open" @click="toggle" class="text-white my-6 mr-6" :icon="['far', 'times']" size="2x"></font-awesome>
          <font-awesome v-else @click="toggle" class="text-white mr-4" :icon="['far', 'bars']" size="2x"></font-awesome>
        </div>
      </div>
    </div>
    <div v-if="open" class="fixed top-20 left-0 w-full h-full overflow-auto bg-comebackkc-darkblue">
      <nav>
        <ul class="flex flex-col items-center">
          <li
            v-for="(nav, index) in $static.nav_items.edges[0].node.nav_items"
            :key="nav.path"
            class="py-8 border-b border-m4m-gray w-full text-center"
            :class="{ 'border-t': index === 0 }"
          >
            <g-link class="text-white uppercase underline font-semibold" :to="nav.path">{{ nav.label }}</g-link>
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
  components: { SiteFooter },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  mounted() {
    this.open = this.isOpen
  }
}
</script>

<static-query>
query {
  nav_items: allSettings(filter: {path: {eq: "/data/settings/main-nav/"}}) {
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
