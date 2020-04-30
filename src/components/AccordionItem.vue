<template>
  <div>
    <div class="flex justify-between cursor-pointer" :class="titleClasses" @click="toggle">
      <span><slot name="title"></slot></span>
      <span>
        <font-awesome class="mx-4" :icon="['far', 'chevron-up']" v-if="open"></font-awesome>
        <font-awesome class="mx-4" :icon="['far', 'chevron-down']" v-else></font-awesome>
      </span>
    </div>
    <div :class="bodyClasses" v-if="open"><slot name="body"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    titleClasses: String,
    bodyClasses: String
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
