<template>
  <div class="container flex flex-wrap mx-auto" :class="{ 'flex-col-reverse md:flex-row': reverse }">
    <div class="w-full bg-center bg-no-repeat md:w-1/2" :class="columnOneBackgroundColor" :style="{ backgroundImage: columnOneBackgroundImage }">
      <slot name="column1"></slot>
    </div>
    <div class="w-full bg-center bg-no-repeat md:w-1/2" :class="columnTwoBackgroundColor" :style="{ backgroundImage: columnTwoBackgroundImage }">
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
      return this.columnOneImage ? 'url(' + this.columnOneImage + ')' : false
    },
    columnTwoBackgroundColor() {
      return this.columnTwoColor ? this.columnTwoColor : false
    },
    columnTwoBackgroundImage() {
      return this.columnTwoImage ? 'url(' + this.columnTwoImage + ')' : false
    }
  }
}
</script>
