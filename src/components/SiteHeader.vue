<template>
  <div class="h-full px-4 container mx-auto flex items-center justify-center">
    <g-link class="" to="/"><img class="h-16 md:h-32" src="/images/site-logo.png" alt="Comeback KC logo"/></g-link>
    <nav class="flex w-full items-center justify-end">
      <ul class="inline-flex">
        <li v-for="nav in $static.nav_items.edges[0].node.nav_items" :key="nav.path" class="mr-4">
          <g-link class="text-white uppercase font-semibold" :to="nav.path">{{ nav.label }}</g-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

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
