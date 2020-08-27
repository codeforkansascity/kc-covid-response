<template>
  <div>
    <div class="flex justify-between" :class="titleClasses">
      <p><span><slot name="itemname"></slot></span>
      <span><slot name="itemtypes"></slot></span>
   </p>
   </div>
   
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    titleClasses: String,
    bodyClasses: String
  }
}
</script>