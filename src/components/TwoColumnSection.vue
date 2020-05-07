<template>
  <div class="container mx-auto flex flex-wrap" :class="{ 'flex-col-reverse md:flex-row': reverse }">
    <div class="w-full md:w-1/2 bg-no-repeat bg-center" :class="columnOneBackgroundColor" :style="{ backgroundImage: columnOneBackgroundImage }">
      <slot name="column1"></slot>
    </div>
    <div class="w-full md:w-1/2 bg-no-repeat bg-center" :class="columnTwoBackgroundColor" :style="{ backgroundImage: columnTwoBackgroundImage }">
      <slot name="column2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: String,
    columnOneColor: String,
    columnOneImage: String,
    columnTwoColor: String,
    columnTwoImage: String
  },
  computed: {
    reverse() {
      return this.order == 'reversed' ? true : false
    },
    columnOneBackgroundColor() {
      return this.columnOneColor ? this.columnOneColor : false
    },
    columnOneBackgroundImage() {
      return this.columnOneImage ? 'url(' + this.columnOneImage + ')' : 'none'
    },
    columnTwoBackgroundColor() {
      return this.columnTwoColor ? this.columnTwoColor : false
    },
    columnTwoBackgroundImage() {
      return this.columnTwoImage ? 'url(' + this.columnTwoImage + ')' : 'none'
    }
  }
}
</script>
