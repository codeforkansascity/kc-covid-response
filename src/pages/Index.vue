<template>
  <Layout>
    <FullWidthSection image="/images/crossroads-skyline-bg.jpg">
      <div class="container mx-auto flex justify-center py-16 md:py-32">
        <h2 class="font-heading font-bold text-6xl">Campaign Header</h2>
      </div>
    </FullWidthSection>
    <TwoColumnSection order="reversed">
      <template v-slot:column1>
        <div class="py-16 md:py-32 px-2 mx:pl-0 md:pr-32">
          <h2 class="font-heading font-bold text-3xl mb-4">Test Heading</h2>
          <p class="leading-relaxed text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </template>
      <template v-slot:column2>
        <g-image src="~/images/test-image-1.jpg" />
      </template>
    </TwoColumnSection>
    <TwoColumnSection>
      <template v-slot:column1>
        <g-image src="~/images/test-image-2.jpg" />
      </template>
      <template v-slot:column2>
        <div class="py-16 md:py-32 px-2 mx:pl-0 md:pl-32">
          <h2 class="font-heading font-bold text-3xl mb-4">Test Heading</h2>
          <p class="leading-relaxed text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </template>
    </TwoColumnSection>
    <TwoColumnSection>
      <template v-slot:column1>
        <div class="py-16 md:py-32 px-2 mx:pl-0 md:pl-32 text-center">
          <g-image src="~/images/ur-mobile-app.png" />
        </div>
      </template>
      <template v-slot:column2>
        <div class="py-16 md:py-32 px-2 mx:pl-0 md:pl-32">
          <h2 class="font-heading font-bold text-3xl mb-4">Get The App</h2>
          <p class="leading-relaxed text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <button class="px-4 py-2 rounded bg-kc-covid-orange text-white mr-4">Play Store</button>
          <button class="px-4 py-2 rounded bg-kc-covid-orange text-white">App Store</button>
        </div>
      </template>
    </TwoColumnSection>
    <OneColumnSection>
      <div class="py-16 md:py-32 px-8 md:px-32">
        <h2 class="font-heading font-bold text-3xl mb-4 text-center">One Column Section</h2>
        <p class="leading-relaxed text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue';
import TwoColumnSection from '@/components/TwoColumnSection.vue';
import OneColumnSection from '@/components/OneColumnSection.vue';

export default {
  metaInfo: {
    title: 'KC Covid Response'
  },
  components: { FullWidthSection, OneColumnSection, TwoColumnSection }
};
</script>
