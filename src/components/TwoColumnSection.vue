<template>
  <div class="container mx-auto flex flex-wrap" :class="{ 'flex-col-reverse md:flex-row': reverse }">
    <div class="w-full md:w-1/2 bg-cover bg-center" :style="{ backgroundImage: columnOneBackgroundImage }">
      <slot name="column1"></slot>
    </div>
    <div class="w-full md:w-1/2 bg-cover bg-center" :style="{ backgroundImage: columnTwoBackgroundImage }">
      <slot name="column2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: String,
    columnOneImage: String,
    columnTwoImage: String
  },
  computed: {
    reverse() {
      return this.order == 'reversed' ? true : false
    },
    columnOneBackgroundImage() {
      return this.columnOneImage ? 'url(' + this.columnOneImage + ')' : 'none'
    },
    columnTwoBackgroundImage() {
      return this.columnTwoImage ? 'url(' + this.columnTwoImage + ')' : 'none'
    }
  }
}
</script>
