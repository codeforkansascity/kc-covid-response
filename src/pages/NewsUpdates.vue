<template>
  <Layout language="en">
    <PageHeader image="/images/kc-skyline-bg.jpg">
      <template v-slot:title>
        Updates
      </template>
      <template v-slot:sub-title>
        Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span>
      </template>
    </PageHeader>
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">The Latest Updates & Helpful Information</h2>
      <p class="pb-8 md:bp-16 text-comebackkc-darkblue italic">Reliable information, trustworthy sources.</p>
      <p>
        Keep up to date on important information, COVID-19 updates, and news about testing and contact tracing throughout the KC metro area.
      </p>
    </OneColumnSection>
    <FullWidthSection v-for="(update, index) in $page.updates.edges" :key="update.title" class="py-8 md:py-16" :class="{ 'bg-comebackkc-light-gray': index % 2 !== 0 }">
      <div class="container mx-auto px-4">
        <h3 class="text-3xl mb-4" v-html="update.node.title"></h3>
        <div v-html="styleRawHTML(update.node.teaser)"></div>
        <p class="mb-8 mt-4">
          <g-link class="text-white bg-comebackkc-red font-bold px-4 py-2 rounded-md" :to="update.node.path">
            View <font-awesome :icon="['fal', 'long-arrow-right']"></font-awesome>
          </g-link>
        </p>
      </div>
    </FullWidthSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import PageHeader from '@/components/PageHeader.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'

export default {
  metaInfo: {
    title: 'Kansas City COVID-19 Updates & News',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Keep up-to-date on important information and updates about COVID-19 testing and contact tracing within the Kansas City metro area. Learn more here.'
      }
    ]
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, PageHeader }
}
</script>

<page-query>
query {
  updates: allUpdate(filter: { language: { eq: "en" }}, sortBy: "date", order: DESC) {
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
