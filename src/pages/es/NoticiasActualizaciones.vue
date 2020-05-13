<template>
  <Layout language="es">
    <PageHeader image="/images/kc-skyline-bg.jpg">
      <template v-slot:title>
        Actualizaciones
      </template>
      <template v-slot:sub-title>
        Prueba. Rastreo. <span class="text-comebackkc-darkblue">Victoria.</span>
      </template>
    </PageHeader>
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">Las Últimas Actualizaciones e Información Útil</h2>
      <p class="pb-8 md:bp-16 text-comebackkc-darkblue italic">Información Fidedigna, Recursos Confiables</p>
      <p>
        Manténgase al día sobre información importante, actualizaciones sobre el COVID-19 y noticias sobre pruebas y rastreo de contactos en toda el área metropolitana de KC.
      </p>
    </OneColumnSection>
    <FullWidthSection v-for="(update, index) in $page.updates.edges" :key="update.title" class="py-8 md:py-16" :class="{ 'bg-comebackkc-light-gray': index % 2 !== 0 }">
      <div class="container mx-auto px-4">
        <h3 class="text-3xl mb-4" v-html="update.node.title"></h3>
        <div v-html="styleRawHTML(update.node.teaser)"></div>
        <p class="mb-8 mt-4">
          <g-link class="text-white bg-comebackkc-red font-bold px-4 py-2 rounded-md" :to="update.node.path">
            Ver <font-awesome :icon="['fal', 'long-arrow-right']"></font-awesome>
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
  updates: allUpdate(filter: { language: { eq: "es" }}, sortBy: "date", order: DESC) {
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
