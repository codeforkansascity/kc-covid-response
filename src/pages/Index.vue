<template>
  <Layout>
    <FullWidthSection class="md:h-screen flex items-center" image="/images/crossroads-skyline-bg.jpg">
      <div class="container mx-auto text-center px-2 mx:pl-0 py-16 md:py-32">
        <h2 class="font-bold text-6xl">Test. Track. Triumph.</h2>
      </div>
    </FullWidthSection>
    <FullWidthSection>
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <p class="text-2xl text-center text-white font-sans">
          This is the plan to reopen Kansas City safely and responsibly. We're not going back to normal. We're going to comeback better than before.
        </p>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="py-8 md:py-16 px-8 md:px-64">
        <p class="text-xl text-center">To do this, Kansas City needs your help to <strong>Test</strong>, <strong>Track</strong>, and <strong>Contain</strong> the coronavirus.</p>
      </div>
    </OneColumnSection>
    <div class="bg-kc-covid-light-gray">
      <ThreeColumnSection class="md:py-16">
        <template v-slot:column1>
          <div class="px-2 md:pl-0 py-8 md:py-16 md:px-16 text-center">
            <p class="text-kc-covid-blue">
              <font-awesome class="mb-4" :icon="['fal', 'vial']" size="7x"></font-awesome>
            </p>
            <h2 class="font-bold text-3xl mb-4 uppercase text-center">Test</h2>
            <p>
              We are making more test kits available, so we can ensure enough testing to understand the full extent of the pandemic in our region.
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="px-2 md:pl-0 py-8 md:py-16 md:px-16 text-center">
            <p class="text-kc-covid-blue">
              <font-awesome class="mb-4" :icon="['fal', 'analytics']" size="7x"></font-awesome>
            </p>
            <h2 class="font-bold text-3xl mb-4 uppercase text-center">Track</h2>
            <p>
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
            <h2 class="font-bold text-3xl mb-4 uppercase text-center">Contain</h2>
            <p>
              If we test and track, we can make sure that only sick people have to self-isolate. We can ease social distancing restrictions and help Kansas City come back better
              than before.
            </p>
          </div>
        </template>
      </ThreeColumnSection>
    </div>
    <OneColumnSection class="py-8 md:pt-16">
      <h2 class="font-bold text-3xl px-2 md:px-0">Fight COVID With Your Phone</h2>
    </OneColumnSection>
    <TwoColumnSection class="md:pb-32">
      <template v-slot:column1>
        <div class="px-2 md:pl-0 md:pr-16">
          <p>
            Safe. Secure. Private.
          </p>
          <p>
            <ul class="list-disc ml-5 mb-4">
              <li>See if you’ve been exposed</li>
              <li>Privately log your location</li>
              <li>Completely control your data</li>
            </ul>
          </p>
          <p>
            COVID Safe Paths, a free app, lets you see where you’ve been and tells you if you’ve been near anyone diagnosed with COVID19.
          </p>
          <p>
          <button class="px-4 py-2 rounded bg-kc-covid-orange text-white mr-4">Play Store<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome></button>
          <button class="px-4 py-2 rounded bg-kc-covid-orange text-white">App Store<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome></button>
          </p>
          <p>
            <a href="https://covidsafepaths.org/" target="_blank" class="underline text-kc-covid-blue">Learn more about the COVID Safe Paths app</a>
          </p>
        </div>
      </template>
      <template v-slot:column2>
        <div class="px-2 md:px-16">
          <p>
            <em>How it works</em>
          </p>
          <p>
            <ol class="list-decimal ml-5 mb-4">
              <li>Download the app for free, enable location services, and connect to your local health department so they can send you info. (Your personal info is not shared.)</li>
              <li>See where you go. Get alerts if you cross paths with anyone diagnosed with COVID-19.</li>
              <li>Get helpful hints about what to do if you’ve been exposed.</li>
              <li>If you test positive for COVID, you may choose to share info about where you’ve been, anonymously, with your local health department. (Your identity is safe. The info will help them stop the spread.)</li>
            </ol>
          </p>
        </div>
      </template>
    </TwoColumnSection>
    <div class="bg-kc-covid-light-gray">
      <TwoColumnSection>
        <template v-slot:column1>
          <div class="px-2 md:pl-0 py-16 md:py-32 md:pr-16">
            <h2 class="font-bold text-3xl">Get Started</h2>
            <p>
              Find out about the Test, Track and Contain options in your area.
            </p>
            <p>
              Your local health department is the best place to get help with COVID-19. Find out how your health department is combatting COVID-19.
            </p>
            <p>
              <strong>NOTE: If you are feeling sick, call your healthcare provider first.</strong>
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="px-2 md:px-16 pb-16 md:py-32">
            <h2 class="font-bold text-3xl mb-2">Local Health Departments</h2>
            <p class="leading-relaxed text-xl">
              <AccordionItem is-open>
                <template v-slot:title>Cass County</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.casscounty.com/2450/COVID-19" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>Clay County</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.clayhealth.com/279/COVID-19-2019-Novel-Coronavirus" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://www.highlandwebforms.com/LuxSci/CCPHC/COVID-19_Testing.html" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>Jackson County</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.jacohd.org/coronavirus" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://form.jotform.com/201005024298040" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                  <p><a href="https://experience.arcgis.com/experience/34a6ef5efe664974a3c1866aa77fbb6d/" target="_blank" class="underline text-kc-covid-blue">Stats Dashboard</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>Johnson County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 715-2819</p>
                  <p><a href="https://www.jocogov.org/coronavirus-covid-19-update" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://www.jocogov.org/coronavirus-covid-19-update" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                  <p><a href="https://public.tableau.com/profile/mapper.of.the.day.mod.#!/vizhome/covid19_joco_public/Dashboard" target="_blank" class="underline text-kc-covid-blue">Stats Dashboard</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>KCMO</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.kcmo.gov/city-hall/departments/health/coronavirus" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://us.openforms.com/Form/7558551f-763c-4ebb-a7ff-0ef5a333f541" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                  <p><a href="https://www.kcmo.gov/city-hall/departments/health/coronavirus-covid-19/covid-19-totals" target="_blank" class="underline text-kc-covid-blue">Stats Dashboard</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>Leavenworth County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 250-2000</p>
                  <p><a href="https://www.leavenworthcounty.gov/covid/" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>Miami County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 294-2431</p>
                  <p><a href="https://www.miamicountyks.org/AlertCenter.aspx" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>Platte County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 294-2431</p>
                  <p><a href="https://www.plattecountyhealthdept.com/emergency.aspx" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem>
                <template v-slot:title>Wyandotte County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 573-8855</p>
                  <p><a href="https://alpha.wycokck.org/Coronavirus-COVID-19-Information" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://survey123.arcgis.com/share/4173374fc06e48ae94df8c95aa2fb7a9?portalUrl=https://unifiedgov.maps.arcgis.com" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                  <p><a href="https://experience.arcgis.com/experience/34a6ef5efe664974a3c1866aa77fbb6d/" target="_blank" class="underline text-kc-covid-blue">Stats Dashboard</a></p>
                </template>
              </AccordionItem>
            </p>
          </div>
        </template>
      </TwoColumnSection>
    </div>
    <OneColumnSection>
      <div class="py-8 md:py-16 px-8 md:px-32">
        <h2 class="font-bold text-3xl mb-4 text-center">Stay Informed</h2>
        <p class="leading-relaxed text-xl text-center">
          We’re just getting started. This site will be updated frequently with new info. Subscribe to our email list for updates about testing availability, screening tools, and opportunities to fight Covid-19.
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
                <input type="email" @input="setEmail($event.target.value)" placeholder="Email address" class="border border-kc-covid-gray h-12 rounded px-4 md:mr-4 w-full md:w-auto" />
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
    <div class="container mx-auto">
      <div class="border-t-4 border-kc-covid-blue w-1/2 mx-auto"></div>
    </div>
    <OneColumnSection>
      <div class="py-8 md:py-16 px-2 md:px-0">
        <h2 class="font-bold text-3xl mb-8 text-center">Brought To You By</h2>
        <div class="flex items-center justify-between">
          <a href="https://www.vmlyr.com" target="_blank"><g-image src="~/images/vmlyr-logo.png" width="200"/></a>
          <a href="https://www.vmlyr.com" target="_blank"><g-image src="~/images/vmlyr-logo.png" width="200" /></a>
          <a href="https://www.vmlyr.com" target="_blank"><g-image src="~/images/vmlyr-logo.png" width="200" /></a>
          <a href="https://www.vmlyr.com" target="_blank"><g-image src="~/images/vmlyr-logo.png" width="200" /></a>
        </div>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue';
import OneColumnSection from '@/components/OneColumnSection.vue';
import TwoColumnSection from '@/components/TwoColumnSection.vue';
import ThreeColumnSection from '@/components/ThreeColumnSection.vue';
import AccordionItem from '@/components/AccordionItem.vue';
import MailchimpSubscribe from 'vue-mailchimp-subscribe';
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js';

export default {
  metaInfo: {
    title: 'Test Track Triumph',
    meta: [{ key: 'description', name: 'description', content: 'Do your part to re-open Kansas City safely.' }]
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, TwoColumnSection, ThreeColumnSection, AccordionItem, MailchimpSubscribe },
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
