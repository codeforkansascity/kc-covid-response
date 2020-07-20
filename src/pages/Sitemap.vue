<template>
  <Layout language="en">
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="mb-8 text-4xl md:mb-16">Sitemap</h2>
      <h3 class="text-3xl">Pages</h3>
      <div class="mb-8 md:mb-16">
        <p v-for="page in $page.pages.edges" :key="page.title">
          <a :href="page.node.path">{{ page.node.title }}</a>
        </p>
      </div>
      <h3 class="text-3xl">Updates</h3>
      <div class="mb-8 md:mb-16">
        <p v-for="update in $page.updates.edges" :key="update.title">
          <a :href="update.node.path">{{ update.node.title }}</a>
        </p>
      </div>
      <h3 class="text-3xl">Resources</h3>
      <div class="mb-8 md:mb-16">
        <p v-for="resource in $page.resources.edges" :key="resource.title">
          <a :href="resource.node.path">{{ resource.node.title }}</a>
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
  components: { FullWidthSection, OneColumnSection }
}
</script>

<page-query>
query {
  pages: allBasicPage(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  } 
  resources: allResource(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  } 
  updates: allUpdate(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  } 
}
</page-query>
