<template>
  <div>
    <FullWidthSection class="md:h-screen-60 flex items-center" :image="image">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow">
          <slot name="title"></slot>
        </h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
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
    image: String
  },
  components: { FullWidthSection }
}
</script>
