<template>
  <div class="w-full bg-cover bg-center" :style="{ backgroundImage: `url('${image}')` }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    image: String
  }
};
</script>
