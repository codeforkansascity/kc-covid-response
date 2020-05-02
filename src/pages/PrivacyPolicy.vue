<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/crossroads-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="text-white text-4xl md:text-10xl text-shadow">Privacy Policy</h1>
      </div>
    </FullWidthSection>
    <FullWidthSection class="bg-comebackkc-red">
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl text-center text-white">Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span></h2>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="px-4 md:px-0 my-8 md:my-16">
        <h2 class="text-4xl mb-4">Privacy Policy</h2>
        <p>Last updated: 4/30/2020</p>
        <p>
          C19KC ("us", "we", or "our") operates <a class="text-comebackkc-darkblue underline" href="ttp://www.comebackkc.com">http://www.comebackkc.com</a> (the "Site"). This page
          informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
        </p>
        <p>
          We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this
          policy.
        </p>

        <h3 class="text-2xl mb-4">Information Collection And Use</h3>
        <p>
          While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable
          information may include, but is not limited to your name ("Personal Information"), email address, or physical address.
        </p>

        <h3 class="text-2xl mb-4">Log Data</h3>
        <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").</p>
        <p>
          This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the
          time and date of your visit, the time spent on those pages and other statistics.
        </p>
        <p>
          In addition, we may use third party services such as Google Analytics that collect, monitor and analyze traffic to and behavior on our Site in order to improve the Site.
        </p>

        <h3 class="text-2xl mb-4">Communications</h3>
        <p>
          We may use your Personal Information to contact you with newsletters, email updates, or text message updates if you give us permission to do so. We will only communicate
          with you with information relevant to COVID-19 in the Kansas City region. We may use third-party services such as email services or text messaging services to communicate
          with you. Otherwise, we will not sell, rent, or share your Personal Information with third parties, except that, only with your express consent, we may share your data
          with your local or county health department.
        </p>

        <h3 class="text-2xl mb-4">Cookies</h3>
        <p>
          Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your
          computer's hard drive.
        </p>
        <p>
          Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you
          do not accept cookies, you may not be able to use some portions of our Site.
        </p>

        <h3 class="text-2xl mb-4">Security</h3>
        <p>
          The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100%
          secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
        </p>

        <h3 class="text-2xl mb-4">Changes To This Privacy Policy</h3>
        <p>
          This Privacy Policy is effective as of 4/30/2020 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect
          immediately after being posted on this page.
        </p>
        <p>
          We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we
          post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified
          Privacy Policy.
        </p>
        <p>
          If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our
          website.
        </p>

        <h3 class="text-2xl mb-4">Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at
          <a class="text-comebackkc-darkblue underline" href="mailto:info@comebackkc.com">info@comebackkc.com</a>.
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
    title: 'COMEBACK KC Privacy Policy',
    meta: [{ key: 'description', name: 'description', content: 'Read the privacy policy for COMEBACK KC here.' }]
  },
  components: { FullWidthSection, OneColumnSection }
};
</script>
