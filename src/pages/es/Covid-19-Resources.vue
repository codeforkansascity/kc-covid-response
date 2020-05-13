<template>
  <Layout>
    <PageHeader image="/images/kc-skyline-bg.jpg">
      <template v-slot:title>
        Recursos
      </template>
      <template v-slot:sub-title>
        Prueba. Rastreo. <span class="text-comebackkc-darkblue">Victoria.</span>
      </template>
    </PageHeader>
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">Recursos</h2>
      <p class="pb-8 md:bp-16 text-comebackkc-darkblue italic">Planes actualizados de acción contra el COVID-19 para el área metropolitana de Kansas y Misuri.</p>
      <p>
        Regresa KC es uno de los muchos grupos que trabajan juntos para que nuestra ciudad regrese de manera segura y responsable. Proporcionamos una página única donde se puede
        encontrar documentos de cada uno de estos grupos, así como materiales descargables para compartir mensajes claves con familiares y compañeros de trabajo y más.
        Actualizaremos esta página a medida que haya más recursos disponibles.
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
          <div class="w-full lg:w-5/12 py-8 lg:px-8 h-full overflow-hidden">{{ resource.node.content | striphtml }}</div>
          <div class="w-full lg:w-2/12">
            <g-link v-if="viewLink(resource)" class="text-white bg-comebackkc-red font-bold px-4 py-2 rounded-md" :to="viewLink(resource)">
              Ver <font-awesome :icon="['fal', 'long-arrow-right']"></font-awesome>
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
import PageHeader from '@/components/PageHeader.vue'
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
  components: { FullWidthSection, OneColumnSection, PageHeader },
  methods: {
    formatedDate(dateString) {
      moment.locale('es')
      return moment(dateString).format('D MMMM, YYYY')
    },
    viewLink(resource) {
      if (resource.node.link) {
        return resource.node.link
      } else if (resource.node.file) {
        return resource.node.file
      }
      return false
    }
  }
}
</script>

<page-query>
query {
  resources: allResource(filter: { language: { eq: "es" }}, sortBy: "date", order: DESC) {
    edges {
      node {
        title
        thumbnail
        date
        organization
        link
        file
        content
      }
    }
  } 
}
</page-query>
