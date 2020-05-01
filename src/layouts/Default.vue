<template>
  <div class="flex flex-col flex-grow">
    <div class="w-full h-20 md:h-40 bg-comebackkc-darkblue flex-grow-0">
      <SiteHeader></SiteHeader>
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <div class="w-full bg-comebackkc-black flex-grow-0">
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  components: { SiteHeader, SiteFooter }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
