<template>
  <Layout language="en">
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">Download Gallery</h2>
      <div style="display:inline-block" v-for="gallery in $page.gallerys.edges" :key="gallery.itemname" class="px-12 mb-8">
            <GalleryItem title-classes="font-bold text-2xl">
              <template v-slot:itemname><p>{{ gallery.node.itemname.slice(0,27) }}</p></template>
              
              <template v-slot:itemtypes>
              <div style="display:flex">
              
              <img :src="gallery.node.thumbnail" width="100" height="120"/>
              <div style="flex:1">
              <p class="px-4">{{ gallery.node.itemtypes }}</p>
             
              <div class="px-4" style="flex:1">
              <a class="px-2 py-1 font-bold text-white rounded-md bg-comebackkc-red" :href="gallery.node.filename" download>Download</a>
               </div></div>
               </div> 
              </template>
               
            </GalleryItem>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import PageHeader from '@/components/PageHeader.vue'
import GalleryItem from '@/components/GalleryItem.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'
export default {
  metaInfo: {
    title: 'ComeBackKC Gallery',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ''
      }
    ]
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, GalleryItem, PageHeader }
}
</script>

<page-query>
query {
  gallerys: allGallery(filter: { language: { eq: "en" }}, sortBy: "order", order: ASC) {
    edges {
      node {
        itemname
        itemtypes
        thumbnail
        filename
      }
    }
  } 
}
</page-query>