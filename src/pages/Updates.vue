<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/kc-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow">Updates</h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection class="px-4 my-8 md:my-16">
      <h2 class="text-4xl mb-8 md:mb-16">Updates</h2>
      <div v-for="update in $page.updates.edges" :key="update.title">
        <h3 class="text-3xl mb-4" v-html="update.node.title"></h3>
        <div v-html="styleRawHTML(update.node.teaser)"></div>
        <p class="mb-8 mt-4">
          <g-link class="text-white bg-comebackkc-red font-bold px-4 py-2 rounded-md" :to="update.node.path">
            View <font-awesome :icon="['fal', 'long-arrow-right']"></font-awesome>
          </g-link>
        </p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'

export default {
  metaInfo: {
    title: 'COMEBACK KC Updates',
    meta: [{ key: 'description', name: 'description', content: 'Get the latest updates for COMEBACK KC here.' }]
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection }
}
</script>

<page-query>
query {
  updates: allUpdate(sortBy: "date", order: DESC) {
    edges {
      node {
        title
        teaser
        path
      }
    }
  } 
}
</page-query>
