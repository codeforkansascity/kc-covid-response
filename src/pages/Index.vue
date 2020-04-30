<template>
  <Layout>
    <FullWidthSection class="md:h-screen flex items-center" image="/images/crossroads-skyline-bg.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h1 class="font-black text-6xl">Comeback KC</h1>
      </div>
    </FullWidthSection>
    <FullWidthSection>
      <div class="container mx-auto px-8 md:px-64 py-8 md:py-16">
        <h2 class="text-4xl font-bold text-center text-white">Test. Track. Triumph.</h2>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="py-8 md:py-16 px-8 md:px-64">
        <p class="text-xl text-center">Kansas City never quits. No matter the odds we always find a way to come together and overcome. Today is no different. Let's bring KC back the right way &mdash; safely and responsibly &mdash; to ensure that we come back better and stronger than ever.</p>
      </div>
    </OneColumnSection>
    <div class="bg-kc-covid-light-gray">
      <ThreeColumnSection class="md:py-16">
        <template v-slot:column1>
          <div class="px-4 md:pl-0 py-8 md:py-16 md:px-16 text-center">
            <p class="text-kc-covid-blue">
              <font-awesome class="mb-4" :icon="['fal', 'vial']" size="7x"></font-awesome>
            </p>
            <h2 class="font-bold text-3xl mb-4 uppercase text-center">Test</h2>
            <p>
              With enough testing, we can understand the full extent of the pandemic in our region. That's why we are making more test kits available than ever before.
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="px-4 md:pl-0 py-8 md:py-16 md:px-16 text-center">
            <p class="text-kc-covid-blue">
              <font-awesome class="mb-4" :icon="['fal', 'analytics']" size="7x"></font-awesome>
            </p>
            <h2 class="font-bold text-3xl mb-4 uppercase text-center">Track</h2>
            <p>
              Through apps built with your privacy in mind, our contact tracing team can help those sick with COVID identify those they may have affected so they can be tested, too.
            </p>
          </div>
        </template>
        <template v-slot:column3>
          <div class="px-4 md:pl-0 py-8 md:py-16 md:px-16 text-center">
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
    <OneColumnSection class="pt-16 md:pt-32 pb-4 md:pb-8">
      <h2 class="font-bold text-3xl px-4 md:px-0">Fight COVID With Your Phone</h2>
    </OneColumnSection>
    <TwoColumnSection class="pb-16 md:pb-32">
      <template v-slot:column1>
        <div class="px-4 md:pl-0 md:pr-16">
          <p>
            Safe. Secure. Private. COVID Safe Paths, a free app, lets you see where you’ve been and alerts you if you've been exposed to COVID19.
          </p>
          <p>
            <ul class="list-disc ml-5 mb-4">
              <li>Find out if you’ve been exposed</li>
              <li>Privately log your location</li>
              <li>Completely control your data</li>
            </ul>
          </p>
          <p>
            COVID Safe Paths, a free app, lets you see where you’ve been and tells you if you’ve been near anyone diagnosed with COVID19.
          </p>
          <p>
            <a id="play-store-download" href="#" target="_blank"><button class="px-4 py-2 rounded bg-kc-covid-orange text-white mr-4">Play Store<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome></button></a>
            <a id="app-store-download" href="#" target="_blank"><button class="px-4 py-2 rounded bg-kc-covid-orange text-white">App Store<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome></button></a>
          </p>
          <p>
            <a href="https://covidsafepaths.org/" target="_blank" class="underline text-kc-covid-blue">Learn more about the COVID Safe Paths app</a>
          </p>
        </div>
      </template>
      <template v-slot:column2>
        <div class="px-4 md:px-16">
          <p>
            <em>How it works</em>
          </p>
          <p>
            <ol class="list-decimal ml-5 mb-4">
              <li>Download the free app, enable location services, and anonymously connect to your local health department</li>
              <li>Track where you go and get alerts if you’re exposed to anyone diagnosed with COVID-19.</li>
              <li>rowse helpful hints about what to do if you’ve been exposed.</li>
              <li>If you test positive for COVID, you may anonymously choose to share info about where you’ve been with your local health department</li>
            </ol>
          </p>
        </div>
      </template>
    </TwoColumnSection>
    <div class="bg-kc-covid-light-gray">
      <TwoColumnSection>
        <template v-slot:column1>
          <div class="px-4 md:pl-0 py-16 md:py-32 md:pr-16">
            <h2 class="font-bold text-3xl mb-4">Get Started</h2>
            <p>
              Find out about Comeback KC efforts in your area through your local health department.
            </p>
            <p>
              And, if you are feeling sick, call your healthcare provider first.
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="px-4 md:px-16 pb-16 md:py-32">
            <h2 class="font-bold text-3xl mb-6">Local Health Departments</h2>
            <p class="leading-relaxed text-xl">
              <AccordionItem is-open title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>Cass County</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.casscounty.com/2450/COVID-19" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>Clay County</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.clayhealth.com/279/COVID-19-2019-Novel-Coronavirus" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://www.highlandwebforms.com/LuxSci/CCPHC/COVID-19_Testing.html" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>Jackson County</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.jacohd.org/coronavirus" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://form.jotform.com/201005024298040" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                  <p><a href="https://experience.arcgis.com/experience/34a6ef5efe664974a3c1866aa77fbb6d/" target="_blank" class="underline text-kc-covid-blue">Stats Dashboard</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>Johnson County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 715-2819</p>
                  <p><a href="https://www.jocogov.org/coronavirus-covid-19-update" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://www.jocogov.org/coronavirus-covid-19-update" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                  <p><a href="https://public.tableau.com/profile/mapper.of.the.day.mod.#!/vizhome/covid19_joco_public/Dashboard" target="_blank" class="underline text-kc-covid-blue">Stats Dashboard</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>KCMO</template>
                <template v-slot:body>
                  <p>Hotline: (877) 435-8411</p>
                  <p><a href="https://www.kcmo.gov/city-hall/departments/health/coronavirus" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                  <p><a href="https://us.openforms.com/Form/7558551f-763c-4ebb-a7ff-0ef5a333f541" target="_blank" class="underline text-kc-covid-blue">Symptom Reporting Form</a></p>
                  <p><a href="https://www.kcmo.gov/city-hall/departments/health/coronavirus-covid-19/covid-19-totals" target="_blank" class="underline text-kc-covid-blue">Stats Dashboard</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>Leavenworth County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 250-2000</p>
                  <p><a href="https://www.leavenworthcounty.gov/covid/" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>Miami County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 294-2431</p>
                  <p><a href="https://www.miamicountyks.org/AlertCenter.aspx" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
                <template v-slot:title>Platte County</template>
                <template v-slot:body>
                  <p>Hotline: (913) 294-2431</p>
                  <p><a href="https://www.plattecountyhealthdept.com/emergency.aspx" target="_blank" class="underline text-kc-covid-blue">COVID Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem title-classes="p-2 pl-4 bg-kc-covid-blue text-white" body-classes="p-2 pl-4 border border-kc-covid-blue">
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
    <OneColumnSection class="pt-16 md:pt-32 pb-4 md:pb-8">
      <h2 class="font-bold text-3xl px-4 md:px-0">Health Inequities</h2>
    </OneColumnSection>
    <TwoColumnSection class="pb-16 md:pb-32">
      <template v-slot:column1>
        <div class="px-4 md:pl-0 md:pr-16">
          <p>We know that COVID-19 has not impacted all communities in our region equally. The black, Latinx, and Native communities have been especially hard hit. There are many reasons for this, but primarily these health inequities are manifestations of systemic racism that has existed long before COVID-19.</p>
          <p>We are committed to making sure that testing, tracking, and support resources are directed to the communities that need them the most. As we reopen and rebuild our economy, we can't just go back to normal, we have to take this opportunity to build a better, fairer Kansas City.</p>
        </div>
      </template>
      <template v-slot:column2>
        <div class="px-4 md:px-16">
          <p>
            <ul class="list-disc ml-5 mb-4">
              <li>About 44% of KC's COVID-19 cases are black, but black people make up just 30% of the KC population (source: KCMO Health Dept.)</li>
              <li>In Kansas, roughly 16% of cases are black, but black people make up only 6% of the population</li>
              <li>Nationally, black and Latinx people are dying at higher rates than their white neighbors</li>
              <li>The Navajo Nation alone has experienced the 3rd highest infection rate outside of New York and New Jersey.</li>
            </ul>
          </p>
        </div>
      </template>
    </TwoColumnSection>
    <div class="bg-kc-covid-light-gray">
      <TwoColumnSection class="py-16 md:py-32">
        <template v-slot:column1>
          <div class="px-4 md:pl-0 md:pr-16">
            <h2 class="font-bold text-3xl mb-4">Stay Informed</h2>
            <p class="leading-relaxed text-xl">
              We’re just getting started. This site will be updated frequently with new info. Subscribe to our email list for updates about testing availability, screening tools, and opportunities to fight Covid-19.
            </p>
            <p class="leading-relaxed text-xl">
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
                    <div class="mt-2" v-if="success">Success!</div>
                    <div class="mt-2" v-if="loading">Subscribing…</div>
                  </form>
                </template>
              </mailchimp-subscribe>
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="px-4 md:px-16">
            <h2 class="font-bold text-3xl mb-4">KC Covid Information</h2>
            <p class="leading-relaxed text-xl">
              For more information on the impact of COVID in the Kansas City region, check out <a class="text-kc-covid-blue underline" href="http://marc-gis.maps.arcgis.com/apps/opsdashboard/index.html#/1c93961075454558b3bf0dfad014feae" target="_blank">MARC's KC COVID dashboard</a>.
            </p>
          </div>
        </template>
      </TwoColumnSection>
    </div>
    <OneColumnSection class="py-16 md:py-32">
      <div class="px-4 md:pl-0 md:pr-16">
        <h2 class="font-bold text-3xl mb-4">FAQs</h2>
        <div v-for="faq in $page.faqs.edges" :key="faq.question" class="mb-8">
          <AccordionItem class="border-b border-kc-covid-light-gray pb-8" title-classes="font-bold text-2xl text-kc-covid-blue">
            <template v-slot:title>{{ faq.node.question }}</template>
            <template v-slot:body><span v-html="styleRawHTML(faq.node.content)"></span></template>
          </AccordionItem>
        </div>

      </div>
    </OneColumnSection>
    <div class="container mx-auto px-32 md:px-64"><div class="border-b-4 border-kc-covid-blue"></div></div>
    <OneColumnSection>
      <div class="py-12 md:py-24 px-4 md:px-0">
        <h2 class="font-bold text-3xl mb-8 text-center">Brought To You By</h2>
        <p class="text-center mb-8">This campaign is a collaboration between many Kansas City organizations. They include:</p>
        <div class="flex flex-wrap items-center justify-around">
          <a href="https://www.c19kc.org/" class="p-8" target="_blank"><g-image src="~/images/c19kc-logo.png" width="200"/></a>
          <a href="https://www.idealect.is/" class="p-8" target="_blank"><g-image src="~/images/idealect-logo.png" width="200" /></a>
          <a href="https://www.bluekc.com/" class="p-8" target="_blank"><g-image src="~/images/blue-cross-blue-shield-logo.png" width="200" /></a>
          <a href="https://www.vmlyr.com" class="p-8" target="_blank"><g-image src="~/images/vmlyr-logo.png" width="200" /></a>
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

<page-query>
query {
  faqs: allFaq(sortBy: "order", order: ASC) {
    edges {
      node {
        question
        content
      }
    }
  } 
}
</page-query>
