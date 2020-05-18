<template>
  <div class="container flex flex-wrap mx-auto" :class="{ 'flex-col-reverse md:flex-row': reverse }">
    <div class="w-full md:w-1/3">
      <slot name="column1"></slot>
    </div>
    <div class="w-full md:w-1/3">
      <slot name="column2"></slot>
    </div>
    <div class="w-full md:w-1/3">
      <slot name="column3"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: String
  },
  computed: {
    reverse() {
      return this.order == 'reversed' ? true : false
    }
  }
}
</script>
