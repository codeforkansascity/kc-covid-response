<template>
  <div class="container mx-auto flex flex-wrap" :class="{ 'flex-col-reverse md:flex-row': reverse }">
    <div class="w-full md:w-1/2">
      <slot name="column1"></slot>
    </div>
    <div class="w-full md:w-1/2">
      <slot name="column2"></slot>
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
      return this.order == 'reversed' ? true : false;
    }
  }
};
</script>
