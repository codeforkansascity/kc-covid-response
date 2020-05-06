<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/kc-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow">Updates</h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="px-4 md:px-0 my-8 md:my-16">
        <h2 class="text-4xl mb-4">Updates</h2>
        <p>Placeholder page</p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'

export default {
  metaInfo: {
    title: 'COMEBACK KC Updates',
    meta: [{ key: 'description', name: 'description', content: 'Get the latest updates for COMEBACK KC here.' }]
  },
  components: { FullWidthSection, OneColumnSection }
}
</script>
