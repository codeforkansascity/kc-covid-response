<template>
  <div>
    <FullWidthSection class="flex items-center lg:h-screen-60" :image="image" :video="video">
      <div class="container px-4 py-16 mx-auto text-center md:py-32">
        <h1 class="text-4xl text-white md:text-6xl lg:text-10xl text-shadow">
          <slot name="title"></slot>
        </h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container px-8 py-8 mx-auto md:px-64 md:py-16">
        <h2 class="text-4xl text-center text-white">
          <slot name="sub-title"></slot>
        </h2>
      </div>
    </FullWidthSection>
  </div>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'

export default {
  props: {
    image: String,
    video: String
  },
  components: { FullWidthSection }
}
</script>
