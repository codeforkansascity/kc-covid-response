<template>
  <div>
    <div class="flex justify-between cursor-pointer" :class="titleClasses" @click="toggle">
      <span><slot name="title"></slot></span>
      <span>
        <IconChevronUp class="w-auto h-6 mx-4 mt-2" v-if="open"></IconChevronUp>
        <IconChevronDown class="w-auto h-6 mx-4 mt-2" v-else></IconChevronDown>
      </span>
    </div>
    <div :class="bodyClasses" v-if="open"><slot name="body"></slot></div>
  </div>
</template>

<script>
import IconChevronUp from '@/components/IconChevronUp.vue'
import IconChevronDown from '@/components/IconChevronDown.vue'

export default {
  props: {
    isOpen: Boolean,
    titleClasses: String,
    bodyClasses: String
  },
  components: { IconChevronUp, IconChevronDown },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  mounted() {
    this.open = this.isOpen
  }
}
</script>
