<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/kc-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow" v-html="$page.resource.title"></h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection class="px-4">
      <h2 class="text-5xl mt-8 md:mt-16 mb-2" v-html="$page.resource.title"></h2>
      <div class="mb-2 font-semibold" v-html="formatedDate(Date.parse($page.resource.date))"></div>
      <div class="mb-8 md:mb-16 font-semibold" v-html="$page.resource.organization"></div>
      <div class="mb-4 md:mb-8" v-html="styleRawHTML($page.resource.content)"></div>
      <div class="mb-4 md:mb-8" v-if="$page.resource.link">
        <a class="text-comebackkc-darkblue font-semibold uppercase underline" :href="$page.resource.link" target="_blank">Link</a>
      </div>
      <div class="mb-4 md:mb-8" v-if="$page.resource.file">
        <a class="text-comebackkc-darkblue font-semibold uppercase underline" :href="$page.resource.file" target="_blank">Download</a>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'
const moment = require('moment')

export default {
  metaInfo() {
    return {
      title: this.$page.resource.title,
      meta: [{ key: 'description', name: 'description', content: this.$page.resource.metaDescription }]
    }
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection },
  methods: {
    formatedDate(dateString) {
      var date = new Date(dateString)
      return moment().format('MMM Do, YYYY')
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  resource(id: $id) {
    title
    metaDescription
    date
    organization
    link
    file
    content
  }
}
</page-query>
