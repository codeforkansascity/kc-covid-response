<template>
  <div>
    <div class="bg-kc-covid-blue text-white p-2 pl-4 flex justify-between cursor-pointer" @click="toggle">
      <span><slot name="title"></slot></span>
      <span>
        <font-awesome class="mx-4" :icon="['far', 'chevron-up']" v-if="open"></font-awesome>
        <font-awesome class="mx-4" :icon="['far', 'chevron-down']" v-else></font-awesome>
      </span>
    </div>
    <div class="p-2 pl-4 border border-kc-covid-blue" v-if="open"><slot name="body"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  mounted() {
    this.open = this.isOpen;
  }
};
</script>
