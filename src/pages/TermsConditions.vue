<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/kc-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow">Terms and Conditions</h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="px-4 md:px-0 my-8 md:my-16">
        <h2 class="text-4xl mb-4">Terms and Conditions ("Terms")</h2>
        <p>Last updated: 4/30/2020</p>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://www.comebackkc.com website (the "Service") operated by C19KC
          ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access
          or use the Service.
        </p>
        <p>
          <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</strong>
        </p>

        <h3 class="text-2xl mb-4">Content</h3>
        <p>
          Our Service allows you to view, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for
          your own use and sharing of the content provided by our service.
        </p>

        <h3 class="text-2xl mb-4">Links To Other Web Sites</h3>
        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by C19KC.</p>
        <p>
          C19KC has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further
          acknowledge and agree that My C19KC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection
          with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>

        <h3 class="text-2xl mb-4">Changes</h3>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice
          prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h3 class="text-2xl mb-4">Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us at <a class="text-comebackkc-darkblue underline" href="mailto:info@comebackkc.com">info@comebackkc.com</a>.
        </p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue';
import OneColumnSection from '@/components/OneColumnSection.vue';

export default {
  metaInfo: {
    title: 'COMEBACK KC Terms of Use',
    meta: [{ key: 'description', name: 'description', content: 'Read the terms and conditions for COMEBACK KC here.' }]
  },
  components: { FullWidthSection, OneColumnSection }
};
</script>
