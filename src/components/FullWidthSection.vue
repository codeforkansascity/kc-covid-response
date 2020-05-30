<template>
  <div class="relative w-full overflow-hidden bg-center bg-cover" :style="{ backgroundImage: backgroundImage }">
    <video v-if="backgroundVideo" autoplay loop class="absolute min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2">
      <source :src="backgroundVideo" type="video/mp4">
    </video>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    video: String
  },
  computed: {
    backgroundImage() {
      return this.image ? 'url(' + this.image + ')' : 'none'
    },
    backgroundVideo() {
      return this.video ? this.video : false
    }
  }
}
</script>
