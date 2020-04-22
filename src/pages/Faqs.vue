<template>
  <Layout>
    <OneColumnSection class="my-16">
      <h1 class="font-black text-4xl mb-4">FAQs</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda
        rem dolores inventore iste reprehenderit maxime! Iusto.
      </p>
      <div v-for="faq in $page.faqs.edges" :key="faq.question">
        <h2 class="font-black text-3xl mb-4">{{ faq.node.question }}</h2>
        <span v-html="styleRawHTML(faq.node.content)"></span>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import OneColumnSection from '@/components/OneColumnSection.vue';
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js';

export default {
  mixins: [rawHtmlMixin],
  metaInfo: {
    title: 'FAQs'
  },
  components: { OneColumnSection }
};
</script>

<page-query>
query {
  faqs: allFaq {
    edges {
      node {
        question
        content
      }
    }
  } 
}
</page-query>
