<template>
  <Layout>
    <OneColumnSection class="container mx-auto h-full flex items-center justify-center text-center">
      <div class="py-16 md:py-32 px-4">
        <h1 class="text-4xl mb-8 md:mb-16">Page Not Found</h1>
        <p class="md:w-1/2 mx-auto">
          We couldn't find the page you were looking for. You can probably find the information you want starting on our
          <g-link class="text-comebackkc-darkblue hover:underline" to="/">homepage</g-link>.
        </p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import OneColumnSection from '@/components/OneColumnSection.vue';

export default {
  components: [OneColumnSection]
};
</script>
