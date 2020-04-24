<template>
  <div class="w-full bg-cover bg-center bg-kc-covid-darkblue" :style="{ backgroundImage: `url('${image}')` }">
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
