<template>
  <Layout>
    <FullWidthSection class="flex items-center md:h-screen-60" image="/images/kc-skyline-bg.jpg">
      <div class="container px-4 py-16 mx-auto text-center mx:pl-0 md:py-32">
        <h1 class="text-4xl text-white md:text-10xl text-shadow" v-html="$page.basicPage.title"></h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container px-8 py-8 mx-auto md:px-64 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection class="px-4 my-8 md:my-16">
      <div class="my-8 md:my-16">
        <h2 class="text-5xl" v-html="$page.basicPage.title"></h2>
      </div>
      <div v-html="styleRawHTML($page.basicPage.content)"></div>
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
      title: this.$page.basicPage.title,
      meta: [{ key: 'description', name: 'description', content: this.$page.basicPage.metaDescription }]
    }
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection }
}
</script>

<page-query>
query ($id: ID!) {
  basicPage(id: $id) {
    title
    metaDescription
    content
  }
}
</page-query>
