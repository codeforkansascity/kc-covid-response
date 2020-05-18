<template>
  <Layout>
    <OneColumnSection class="container flex items-center justify-center h-full mx-auto text-center">
      <div class="px-4 py-16 md:py-32">
        <h1 class="mb-8 text-4xl md:mb-16">Page Not Found</h1>
        <p class="mx-auto md:w-1/2">
          We couldn't find the page you were looking for. You can probably find the information you want starting on our
          <g-link class="text-comebackkc-darkblue hover:underline" to="/">homepage</g-link>.
        </p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import OneColumnSection from '@/components/OneColumnSection.vue'

export default {
  components: { OneColumnSection }
}
</script>
