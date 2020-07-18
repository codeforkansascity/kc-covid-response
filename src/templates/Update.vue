<template>
  <Layout>
    <OneColumnSection class="px-4 my-8 md:my-16">
      <h2 class="my-8 text-5xl md:my-16" v-html="$page.update.title"></h2>
      <div class="mb-8 md:mb-16" v-html="styleRawHTML($page.update.content)"></div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'

export default {
  metaInfo() {
    return {
      title: this.$page.update.title,
      meta: [{ key: 'description', name: 'description', content: this.$page.update.metaDescription },{ key: 'og:title', name: 'og:title', content: this.$page.update.title },{ key: 'og:description', name: 'og:description', content: this.$page.update.ogDescription },{ key: 'og:image', name: 'og:image', content: 'https://comebackkc.com' + this.$page.update.ogImage }]
    }
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection }
}
</script>

<page-query>
query ($id: ID!) {
  update(id: $id) {
    title
    metaDescription
    ogDescription
    ogImage
    date
    content
  }
}
</page-query>
