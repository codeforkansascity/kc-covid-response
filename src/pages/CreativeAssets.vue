<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/kc-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow">Creative Assets</h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection class="px-4 my-8 md:my-16">
      <h2 class="text-4xl">Join the Comeback</h2>
      <p class="pb-8 md:bp-16 text-comebackkc-darkblue italic">Help create the comeback.</p>
      <p>
        Bringing Kansas City back the right way will take all of us. So, we’ve made all our campaign assets available free to download and share on your social channels and more.
        We invite you to create whatever you want with the campaign* - social content, posters, T-shirts, signs. If you make something fantastic, please share it with us! We’d love
        to see what you come up with.
      </p>
      <p>
        Terms:<br />
        These assets are offered under the Creative Commons license, and commercial use is allowed. We ask that you include a link to comebackkc.com, a URL, or hashtag #comebackkc
        by way of attribution.
      </p>
      <p>
        <a class="text-comebackkc-darkblue underline font-semibold" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"
          >https://creativecommons.org/licenses/by-sa/4.0/</a
        >
      </p>
      <p>
        <span class="font-bold">*IMPORTANT:</span> The only thing that Comeback KC expressly forbids usage of these assets to spread misinformation or anything contrary to the
        interests of public health as determined by regional public health officials. Other than that, go wild!
      </p>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'

export default {
  metaInfo: {
    title: 'Download COMEBACK KC Campaign Assets Here',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'All COMEBACK KC campaign assets are available for free download, usage on social channels, and more. Download the creative assets here.'
      }
    ]
  },
  components: { FullWidthSection, OneColumnSection }
}
</script>
