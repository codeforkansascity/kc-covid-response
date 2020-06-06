<template>
  <div class="flex flex-col flex-grow">
    <div class="z-20 flex-grow-0 w-full h-20 md:h-40 bg-comebackkc-darkblue">
      <SiteHeader :language="language"></SiteHeader>
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <div class="flex-grow-0 w-full bg-comebackkc-darkblue">
      <SiteFooter :language="language"></SiteFooter>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  props: {
    language: String
  },
  components: { SiteHeader, SiteFooter },
  computed: {
    metaUrl() {
      const path = this.$route && this.$route.path
      return { content: `${this.$static.metadata.siteUrl}${path}` }
    }
  },
  metaInfo() {
    console.log(this.metaUrl)
    return {
      meta: [{ key: 'og:url', property: 'og:url', content: this.metaUrl.content }]
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>
