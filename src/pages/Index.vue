<template>
  <Layout>
    <FullWidthSection class="md:h-screen flex items-center" image="/images/crossroads-skyline-bg.jpg">
      <div class="container mx-auto text-center px-2 mx:pl-0 py-16 md:py-32">
        <h2 class="font-heading font-bold text-6xl">Campaign Header</h2>
      </div>
    </FullWidthSection>
    <FullWidthSection>
      <div class="container mx-auto flex justify-center px-2 mx:pl-0 py-8 md:py-16">
        <div class="text-white font-sans text-4xl">Test. Track. Triumph.</div>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="py-8 md:pt-32 md:pb-16 px-8 md:px-32">
        <p class="text-2xl text-center">
          This is the plan to reopen Kansas City safely and responsibly. We're not going back to normal. We're going to comeback better than before.
        </p>
        <p class="text-xl text-center">To do this, Kansas City needs your help to <strong>Test</strong>, <strong>Track</strong>, and <strong>Contain</strong> the coronavirus.</p>
      </div>
    </OneColumnSection>
    <div class="bg-kc-covid-light-gray">
      <ThreeColumnSection class="md:pb-16">
        <template v-slot:column1>
          <div class="px-2 md:pl-0 py-8 md:py-16 md:px-16 text-center">
            <p class="text-kc-covid-blue">
              <font-awesome class="mb-4" :icon="['fal', 'vial']" size="7x"></font-awesome>
            </p>
            <h2 class="font-heading font-bold text-3xl mb-4 uppercase text-center">Test</h2>
            <p class="leading-relaxed text-xl">
              We are making more test kits available, so we can ensure enough testing to understand the full extent of the pandemic in our region.
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="px-2 md:pl-0 py-8 md:py-16 md:px-16 text-center">
            <p class="text-kc-covid-blue">
              <font-awesome class="mb-4" :icon="['fal', 'analytics']" size="7x"></font-awesome>
            </p>
            <h2 class="font-heading font-bold text-3xl mb-4 uppercase text-center">Track</h2>
            <p class="leading-relaxed text-xl">
              If you are sick with COVID, our apps and contact tracing teams can help identify places you've gone and people you've had contact with, so that we can help them get
              tested too.
            </p>
          </div>
        </template>
        <template v-slot:column3>
          <div class="px-2 md:pl-0 py-8 md:py-16 md:px-16 text-center">
            <p class="text-kc-covid-blue">
              <font-awesome class="mb-4" :icon="['fal', 'flask-poison']" size="7x"></font-awesome>
            </p>
            <h2 class="font-heading font-bold text-3xl mb-4 uppercase text-center">Contain</h2>
            <p class="leading-relaxed text-xl">
              If we test and track, we can make sure that only sick people have to self-isolate. We can ease social distancing restrictions and help Kansas City come back better
              than before.
            </p>
          </div>
        </template>
      </ThreeColumnSection>
    </div>
    <TwoColumnSection order="reversed">
      <template v-slot:column1>
        <div class="px-2 md:pl-0 py-16 md:py-32 md:pr-32">
          <h2 class="font-heading font-bold text-3xl mb-4">Test Heading</h2>
          <p class="leading-relaxed text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </template>
      <template v-slot:column2>
        <g-image src="~/images/test-image-1.jpg" />
      </template>
    </TwoColumnSection>
    <TwoColumnSection>
      <template v-slot:column1>
        <g-image src="~/images/test-image-2.jpg" />
      </template>
      <template v-slot:column2>
        <div class="px-2 md:pl-0 py-16 md:py-32 md:pl-32">
          <h2 class="font-heading font-bold text-3xl mb-4">Test Heading</h2>
          <p class="leading-relaxed text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p class="leading-relaxed text-xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </template>
    </TwoColumnSection>
    <TwoColumnSection>
      <template v-slot:column1>
        <div class="md:py-16 px-2 md:px-0">
          <g-image src="~/images/ur-mobile-app.png" class="mx-auto" />
        </div>
      </template>
      <template v-slot:column2>
        <div class="py-8 md:py-16 px-2 md:pr-0 md:pl-32 text-center md:text-left">
          <h2 class="font-heading font-bold text-3xl mb-4">Get The App</h2>
          <p class="leading-relaxed text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <button class="px-4 py-2 rounded bg-kc-covid-orange text-white mr-4">Play Store<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome></button>
          <button class="px-4 py-2 rounded bg-kc-covid-orange text-white">App Store<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome></button>
        </div>
      </template>
    </TwoColumnSection>
    <OneColumnSection>
      <div class="py-8 md:py-16 px-8 md:px-32">
        <h2 class="font-heading font-bold text-3xl mb-4 text-center">Email Newsletter</h2>
        <p class="leading-relaxed text-xl text-center">
          Sign up to get the lastest on KC's comeback.
        </p>
        <p class="leading-relaxed text-xl text-center">
          <mailchimp-subscribe
            url="https://comebackkc.us8.list-manage.com/subscribe/post-json"
            user-id="29e20716727b79f181330a1a0"
            list-id="4dbc9273ae"
            @error="onError"
            @success="onSuccess"
          >
            <template v-slot="{ subscribe, setEmail, error, success, loading }">
              <form @submit.prevent="subscribe">
                <input type="email" @input="setEmail($event.target.value)" class="border h-12 rounded px-4 md:mr-4 w-full md:w-auto" />
                <button type="submit" class="px-4 py-2 mt-4 md:mt-0 rounded bg-kc-covid-orange text-white">
                  Sign up<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome>
                </button>
                <div class="mt-2" v-if="error"><span v-html="styleRawHTML(error)"></span></div>
                <div class="mt-2" v-if="success">Yer in!</div>
                <div class="mt-2" v-if="loading">Subscribing…</div>
              </form>
            </template>
          </mailchimp-subscribe>
        </p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue';
import OneColumnSection from '@/components/OneColumnSection.vue';
import TwoColumnSection from '@/components/TwoColumnSection.vue';
import ThreeColumnSection from '@/components/ThreeColumnSection.vue';
import MailchimpSubscribe from 'vue-mailchimp-subscribe';
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js';

export default {
  metaInfo: {
    title: 'Test Track Triumph',
    meta: [{ key: 'description', name: 'description', content: 'Do your part to re-open Kansas City safely.' }]
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, TwoColumnSection, ThreeColumnSection, MailchimpSubscribe },
  methods: {
    onError() {
      console.log(this.error);
    },
    onSuccess() {
      // handle success
    }
  }
};
</script>
