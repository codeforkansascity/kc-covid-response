<template>
  <Layout language="en">
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">FAQ</h2>
      <div v-for="faq in $page.faqs.edges" :key="faq.question" class="mb-8">
            <AccordionItem class="pb-8 border-b border-black" title-classes="font-bold text-2xl">
              <template v-slot:title>{{ faq.node.question }}</template>
              <template v-slot:body
                ><span v-html="styleRawHTML(faq.node.content, 'black')"></span
              ></template>
            </AccordionItem>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import PageHeader from '@/components/PageHeader.vue'
import AccordionItem from '@/components/AccordionItem.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'
export default {
  metaInfo: {
    title: 'ComeBackKC FAQ',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ''
      }
    ]
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, AccordionItem, PageHeader }
}
</script>

<page-query>
query {
  faqs: allFaq(filter: { language: { eq: "en" }}, sortBy: "order", order: ASC) {
    edges {
      node {
        question
        content
      }
    }
  } 
}
</page-query>