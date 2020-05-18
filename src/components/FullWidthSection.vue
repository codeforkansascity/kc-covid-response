<template>
  <div class="w-full bg-center bg-cover" :style="{ backgroundImage: backgroundImage }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    image: String
  },
  computed: {
    backgroundImage() {
      return this.image ? 'url(' + this.image + ')' : 'none'
    }
  }
}
</script>
