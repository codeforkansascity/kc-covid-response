<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/kc-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow">Resources</h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">Your Go-To Resource</h2>
      <p class="pb-8 md:bp-16 text-comebackkc-darkblue italic">Up-to-date plans and actionable COVID-19 content for the Metro, Kansas and Missouri.</p>
      <p>
        Comeback KC is one of many groups working together to bring our city back safely and responsibly. We’re providing a single page where you can find documents from each of
        these groups as well as downloadable materials for sharing key messages with family and coworkers, and more. We will update this page as more resources become available.
      </p>
    </OneColumnSection>
    <FullWidthSection v-for="(resource, index) in $page.resources.edges" :key="resource.title">
      <div class="py-8 md:py-16" :class="{ 'bg-comebackkc-light-gray': index % 2 !== 0 }">
        <div class="container mx-auto px-4 flex flex-wrap items-center justify-start md:justify-between">
          <div class="w-1/2 lg:w-2/12"><img :src="resource.node.thumbnail" /></div>
          <div class="w-1/2 md:pl-8 lg:w-3/12 pl-4 lg:px-8">
            <div class="font-bold mb-6 text-comebackkc-darkblue" v-html="resource.node.title"></div>
            <div class="mb-6" v-html="formatedDate(Date.parse(resource.node.date))"></div>
            <div v-html="resource.node.organization"></div>
          </div>
          <div class="w-full lg:w-5/12 py-8 lg:px-8 h-full overflow-hidden" v-html="styleRawHTML(resource.node.teaser)"></div>
          <div class="w-full lg:w-2/12">
            <g-link class="text-white bg-comebackkc-red font-bold px-4 py-2 rounded-md" :to="resource.node.path">
              View <font-awesome :icon="['fal', 'long-arrow-right']"></font-awesome>
            </g-link>
          </div>
        </div>
      </div>
    </FullWidthSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'
const moment = require('moment')

export default {
  metaInfo: {
    title: 'Kansas City COVID-19 Resources',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Find up-to-date plans and actionable COVID-19 resources for the Kansas City metro area. Click here to learn more from COMEBACK KC.'
      }
    ]
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
query {
  resources: allResource(sortBy: "date", order: DESC) {
    edges {
      node {
        title
        teaser
        thumbnail
        date
        organization
        path
      }
    }
  } 
}
</page-query>
