<template>
  <Layout>
    <FullWidthSection class="md:h-screen flex items-center" image="/images/temp-hero-1.jpg">
      <div class="container mx-auto text-center px-2 mx:pl-0 py-16 md:py-32">
        <h2 class="text-white font-bold text-6xl">Campaign Header</h2>
      </div>
    </FullWidthSection>
    <FullWidthSection>
      <div class="container mx-auto flex justify-center px-2 mx:pl-0 py-8 md:py-16">
        <div class="text-white font-sans text-4xl">Frequenty Asked Questions</div>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="px-2 md:px-0 my-8 md:my-16">
        <h1 class="font-bold text-4xl mb-4">FAQs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda
          rem dolores inventore iste reprehenderit maxime! Iusto.
        </p>
      </div>
      <div class="px-2 md:px-0 mb-8 md:mb-24">
        <div v-for="faq in $page.faqs.edges" :key="faq.question" class="mb-8">
          <h2 class="font-bold text-3xl mb-4">{{ faq.node.question }}</h2>
          <span v-html="styleRawHTML(faq.node.content)"></span>
        </div>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue';
import OneColumnSection from '@/components/OneColumnSection.vue';
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js';

export default {
  mixins: [rawHtmlMixin],
  metaInfo: {
    title: 'FAQs',
    meta: [{ key: 'description', name: 'description', content: 'Frequently asked questions.' }]
  },
  components: { FullWidthSection, OneColumnSection }
};
</script>

<page-query>
query {
  faqs: allFaq(sortBy: "order", order: ASC) {
    edges {
      node {
        question
        content
      }
    }
  } 
}
</page-query>
