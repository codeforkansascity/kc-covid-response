<template>
  <Layout language="es">
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">Recursos</h2>
      <p class="pb-8 italic md:bp-16 text-comebackkc-darkblue">Planes actualizados de acción contra el COVID-19 para el área metropolitana de Kansas y Misuri.</p>
      <p>
        Regresa KC es uno de los muchos grupos que trabajan juntos para que nuestra ciudad regrese de manera segura y responsable. Proporcionamos una página única donde se puede
        encontrar documentos de cada uno de estos grupos, así como materiales descargables para compartir mensajes claves con familiares y compañeros de trabajo y más.
        Actualizaremos esta página a medida que haya más recursos disponibles.
      </p>
    </OneColumnSection>
    <FullWidthSection v-for="(resource, index) in $page.resources.edges" :key="resource.title">
      <div class="py-8 md:py-16" :class="{ 'bg-comebackkc-light-gray': index % 2 !== 0 }">
        <div class="container flex flex-wrap items-center justify-start px-4 mx-auto md:justify-between">
          <div class="w-1/2 lg:w-2/12"><img :src="resource.node.thumbnail" /></div>
          <div class="w-1/2 pl-4 md:pl-8 lg:w-3/12 lg:px-8">
            <div class="mb-6 font-bold text-comebackkc-darkblue" v-html="resource.node.title"></div>
            <div class="mb-6" v-html="formatedDate(Date.parse(resource.node.date))"></div>
            <div v-html="resource.node.organization"></div>
          </div>
          <div class="w-full h-full py-8 overflow-hidden lg:w-5/12 lg:px-8">{{ resource.node.content | striphtml }}</div>
          <div class="w-full lg:w-2/12">
            <g-link v-if="viewLink(resource)" class="px-4 py-2 font-bold text-white rounded-md bg-comebackkc-red" :to="viewLink(resource)">
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
