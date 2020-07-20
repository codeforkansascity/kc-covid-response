<template>
  <Layout language="en">
    <PageHeader video="/videos/hero.mp4" image="/images/video-poster.jpg">
      <template v-slot:sub-title>
        Test. Track. <span class="text-comebackkc-darkblue">Triumph.</span>
      </template>
    </PageHeader>
    <OneColumnSection>
      <div class="px-8 py-8 md:py-16 md:px-64">
        <p class="text-xl text-center">
          Kansas City never quits. No matter the odds we always find a way to come together and overcome. Today is no different. Let's bring KC back the right way &mdash; safely
          and responsibly &mdash; to ensure that we come back better and stronger than ever.
        </p>
      </div>
    </OneColumnSection>
    <div class="bg-gradient-darkblue-black">
      <ThreeColumnSection>
        <template v-slot:column1>
          <div class="h-full px-4 py-16 text-center text-white md:py-32 md:px-16 bg-comebackkc-darkblue">
            <div class="mb-4">
              <font-awesome class="mb-4" :icon="['fal', 'vial']" size="7x"></font-awesome>
            </div>
            <h3 class="mb-4 text-3xl text-center">Test</h3>
            <p class="mb-0">
              With enough testing, we can understand the full extent of the pandemic in our region. That's why we are making more test kits available than ever before.
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="h-full px-4 py-16 text-center text-white md:py-32 md:px-16 bg-comebackkc-red">
            <div class="mb-4">
              <font-awesome class="mb-4" :icon="['fal', 'analytics']" size="7x"></font-awesome>
            </div>
            <h3 class="mb-4 text-3xl text-center">Track</h3>
            <p class="mb-0">
              Through apps built with your privacy in mind, our contact tracing team can help those sick with COVID-19 identify those they may have affected so they can be tested,
              too.
            </p>
          </div>
        </template>
        <template v-slot:column3>
          <div class="h-full px-4 py-16 text-center text-white md:py-32 md:px-16 bg-comebackkc-black">
            <div class="mb-4">
              <font-awesome class="mb-4" :icon="['fal', 'house-user']" size="7x"></font-awesome>
            </div>
            <h3 class="mb-4 text-3xl text-center">Triumph</h3>
            <p class="mb-0">
              If we test and track, we can make sure that only sick people have to self-isolate. We can ease social distancing restrictions and help Kansas City come back better
              than before.
            </p>
          </div>
        </template>
      </ThreeColumnSection>
    </div>
    <!-- Comment 
    <OneColumnSection class="pt-16 pb-4 md:pt-32 md:pb-8">
      <h2 class="px-4 text-3xl lg:px-4">Fight COVID-19 With Your Phone</h2>
    </OneColumnSection>
    <TwoColumnSection order="reversed">
      <template v-slot:column1>
        <div class="px-4 pb-16 md:pr-16">
          <p>
            Safe. Secure. Private. COVID Safe Paths, a free app, lets you see where you’ve been and alerts you if you've been exposed to COVID-19.
          </p>
          <ul class="mb-8 ml-5 list-disc">
            <li>Find out if you’ve been exposed</li>
            <li>Privately log your location</li>
            <li>Completely control your data</li>
          </ul>
          <p>
            <a id="play-store-download" href="https://play.google.com/store/apps/details?id=org.pathcheck.covidsafepaths&hl=en_US" target="_blank">
              <img class="inline-block mb-4 mr-4" src="/images/google-play.png" alt="Google Play store button" />
            </a>
            <a id="app-store-download" href="https://apps.apple.com/us/app/covid-safe-paths/id1508266966" target="_blank">
              <img class="inline-block mb-4" src="/images/app-store.png" alt="Apple store button" />
            </a>
          </p>
          <p class="mb-16">
            <a href="https://covidsafepaths.org/" target="_blank" class="underline text-comebackkc-darkblue">Learn more about the COVID Safe Paths app</a>
          </p>
        </div>
      </template>
      <template v-slot:column2>
        <div class="flex flex-col items-center justify-end h-full px-4 pb-8 md:pb-0">
          <g-image class="" src="~/images/safe-paths-app-screens.png" alt="Safe Paths app screenshot" />
        </div>
      </template>
    </TwoColumnSection>
    -->
  
  <OneColumnSection class="pt-16 pb-4 md:pt-32 md:pb-8">
      <h2 class="px-4 text-3xl">Testing Events</h2>
       <div class="px-4 pb-16 md:pr-16">
      <p>Several Kansas City area health departments and organizations are offering pop-up testing events at locations
      throughout the city. Some require an appointment, so make sure you check the details. 
      If you're looking for permanent COVID-19 testing sites, visit our
      <a href="https://www.comebackkc.com/kc-covid-testing-locations/">testing locations</a> page.</p>
      <div data-tockify-component="calendar" data-tockify-calendar="kccovidtestevents"></div>
      <p>If you know of a testing event or pop-up location that isn't shown on our calendar, <a href="/contact/">let us know</a>.
      </p></div>
   </OneColumnSection>

    <div class="bg-comebackkc-light-gray">
      <TwoColumnSection>
        <template v-slot:column1>
          <div class="px-4 py-16 md:py-32 md:pr-16">
            <h2 class="mb-4 text-3xl">Get Started</h2>
            <p>
              Find out about testing options and other initiatives in your area through your local health department.
            </p>
            <p>
              And, if you are feeling sick, call your healthcare provider first.
            </p>
          </div>
        </template>
        <template v-slot:column2>
          <div class="px-4 pb-16 md:py-32">
            <h2 class="mb-6 text-3xl">Local Health Departments</h2>
            <div class="text-xl leading-relaxed">
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Cass County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-877-435-8411">(877) 435-8411</a></p>
                  <p><a href="https://www.casscounty.com/2450/COVID-19" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Clay County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-877-435-8411">(877) 435-8411</a></p>
                  <p><a href="https://www.clayhealth.com/279/COVID-19-2019-Novel-Coronavirus" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                  <p>
                    <a href="https://www.highlandwebforms.com/LuxSci/CCPHC/COVID-19_Testing.html" target="_blank" class="underline text-comebackkc-darkblue">
                      Symptom Reporting Form
                    </a>
                  </p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Jackson County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-877-435-8411">(877) 435-8411</a></p>
                  <p><a href="https://www.jacohd.org/coronavirus" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                  <p><a href="https://form.jotform.com/201005024298040" target="_blank" class="underline text-comebackkc-darkblue">Symptom Reporting Form</a></p>
                  <p>
                    <a href="https://experience.arcgis.com/experience/34a6ef5efe664974a3c1866aa77fbb6d/" target="_blank" class="underline text-comebackkc-darkblue">
                      Stats Dashboard
                    </a>
                  </p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Johnson County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-913-715-2819">(913) 715-2819</a></p>
                  <p><a href="https://www.jocogov.org/coronavirus-covid-19-update" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                  <p><a href="https://www.jocogov.org/coronavirus-covid-19-update" target="_blank" class="underline text-comebackkc-darkblue">Symptom Reporting Form</a></p>
                  <p>
                    <a
                      href="https://public.tableau.com/profile/mapper.of.the.day.mod.#!/vizhome/covid19_joco_public/Dashboard"
                      target="_blank"
                      class="underline text-comebackkc-darkblue"
                    >
                      Stats Dashboard
                    </a>
                  </p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  KCMO
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-877-435-8411">(877) 435-8411</a></p>
                  <p><a href="https://www.kcmo.gov/city-hall/departments/health/coronavirus" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                  <p>
                    <a href="https://us.openforms.com/Form/7558551f-763c-4ebb-a7ff-0ef5a333f541" target="_blank" class="underline text-comebackkc-darkblue">
                      Symptom Reporting Form
                    </a>
                  </p>
                  <p>
                    <a href="https://www.kcmo.gov/city-hall/departments/health/coronavirus-covid-19/covid-19-totals" target="_blank" class="underline text-comebackkc-darkblue">
                      Stats Dashboard
                    </a>
                  </p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Leavenworth County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-913-250-2000">(913) 250-2000</a></p>
                  <p><a href="https://www.leavenworthcounty.gov/covid/" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Miami County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-913-294-2431">(913) 294-2431</a></p>
                  <p><a href="https://www.miamicountyks.org/AlertCenter.aspx" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Platte County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-913-294-2431">(913) 294-2431</a></p>
                  <p><a href="https://www.plattecountyhealthdept.com/emergency.aspx" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                </template>
              </AccordionItem>
              <AccordionItem class="pb-4 mb-4 border-b border-comebackkc-gray" title-classes="font-bold text-comebackkc-darkblue">
                <template v-slot:title>
                  Wyandotte County
                </template>
                <template v-slot:body>
                  <p>Call: <a href="tel:+1-913-573-8855">(913) 573-8855</a></p>
                  <p><a href="https://alpha.wycokck.org/Coronavirus-COVID-19-Information" target="_blank" class="underline text-comebackkc-darkblue">COVID-19 Info</a></p>
                  <p>
                    <a
                      href="https://survey123.arcgis.com/share/4173374fc06e48ae94df8c95aa2fb7a9?portalUrl=https://unifiedgov.maps.arcgis.com"
                      target="_blank"
                      class="underline text-comebackkc-darkblue"
                    >
                      Symptom Reporting Form
                    </a>
                  </p>
                  <p>
                    <a href="https://experience.arcgis.com/experience/8781f01908d8403e9273d78e66e6219b" target="_blank" class="underline text-comebackkc-darkblue">
                      Stats Dashboard
                    </a>
                  </p>
                </template>
              </AccordionItem>
            </div>
          </div>
        </template>
      </TwoColumnSection>
    </div>
 
    <div class="bg-gradient-darkblue-red">
      <TwoColumnSection columnTwoColor="bg-comebackkc-red" columnTwoImage="/images/marc-map-bg.png">
        <template v-slot:column1>
          <div class="h-full px-4 py-16 text-white md:pr-16 md:py-32 bg-comebackkc-darkblue">
            <h2 class="mb-4 text-3xl">Stay Informed</h2>
            <p class="text-xl leading-relaxed">
              We’re just getting started. This site will be updated frequently with new info. Subscribe to our email list for updates about testing availability, screening tools,
              and opportunities to fight COVID-19.
            </p>
            <div class="text-xl leading-relaxed">
              <mailchimp-subscribe
                url="https://comebackkc.us8.list-manage.com/subscribe/post-json"
                user-id="29e20716727b79f181330a1a0"
                list-id="4dbc9273ae"
                @error="onError"
                @success="onSuccess"
              >
                <template v-slot="{ subscribe, setEmail, error, success, loading }">
                  <form @submit.prevent="subscribe">
                    <input
                      type="email"
                      v-model="newsletterEmailAddress"
                      @input="setEmail($event.target.value)"
                      placeholder="Email address"
                      aria-label="Email address"
                      class="w-full h-12 px-4 border rounded text-comebackkc-black border-comebackkc-gray md:mr-4 md:w-auto"
                    />
                    <button type="submit" class="px-4 py-2 mt-4 text-white rounded md:mt-0 bg-comebackkc-red">
                      Sign up<font-awesome class="ml-2" :icon="['fal', 'long-arrow-right']"></font-awesome>
                    </button>
                    <div class="mt-2" v-if="error"><span v-html="styleRawHTML(error, 'white')"></span></div>
                    <div class="mt-2" v-if="success">
                      Thanks for subscribing to the COMEBACK KC email list. Keep watch for updates on testing availability, screening tools and opportunities to fight COVID-19.
                    </div>
                    <div class="mt-2" v-if="loading">Subscribing…</div>
                  </form>
                </template>
              </mailchimp-subscribe>
            </div>
          </div>
        </template>
        <template v-slot:column2>
          <div class="h-full px-4 py-16 text-white md:px-16 md:py-32">
            <h2 class="mb-4 text-3xl">KC COVID-19 Information</h2>
            <p class="text-xl leading-relaxed">
              For more information on the impact of COVID-19 in the Kansas City region, check out
              <a class="underline text-comebackkc-darkblue" href="https://www.comebackkc.com/kc-metro-stats/" target="_blank"
                >our dashboard</a
              >.
            </p>
          </div>
        </template>
      </TwoColumnSection>
    </div>
    <OneColumnSection>
      <div class="px-4 py-8 md:py-16">
        <h2 class="mb-4 text-3xl text-center">In Coordination With These Area Health Departments</h2>
        <div class="flex flex-wrap items-center justify-around">
          <a href="https://www.kcmo.gov/city-hall/departments/health" class="px-12 py-4" target="_blank">
            <g-image src="~/images/kcmo-public-health-logo.png" width="120" alt="KCMO Public Health" />
          </a>
          <a href="https://www.jacohd.org/" class="px-12 py-4" target="_blank">
            <g-image src="~/images/jackson-county-health-department-logo.png" width="120" alt="Jackson County Health Department" />
          </a>
          <a href="https://www.wycokck.org/Health.aspx" class="px-12 py-4" target="_blank">
            <g-image src="~/images/wyandotte-county-public-health-logo.png" width="120" alt="Wyandotte County Public Health" />
          </a>
          <a href="https://www.jocogov.org/dept/health-and-environment/home" class="px-12 py-4" target="_blank">
            <g-image src="~/images/johnson-county-health-environment-logo.png" width="120" alt="Johnson County Health and Environment" />
          </a>
          <a href="https://www.plattecountyhealthdept.com/" class="px-12 py-4" target="_blank">
            <g-image src="~/images/platte-county-health-department-logo.png" width="120" alt="Platte County Health Department" />
          </a>
        </div>
      </div>
    </OneColumnSection>
    <OneColumnSection>
      <div class="px-4 pb-8 md:pb-16">
        <h2 class="mb-8 text-3xl text-center">Brought To You By</h2>
        <p class="mb-8 text-center">This campaign is a collaboration between many Kansas City organizations. They include:</p>
        <div class="flex flex-wrap items-center justify-around">
          <a href="https://www.c19kc.org/" class="px-12 py-4" target="_blank"><g-image src="~/images/c19kc-logo.png" width="120" alt="C19KC logo"/></a>
          <a href="https://www.bluekc.com/" class="px-12 py-4" target="_blank">
            <g-image src="~/images/blue-cross-blue-shield-logo.png" width="180" alt="Blue Cross Blue Shield KCs logo" />
          </a>
          <a href="https://www.marc.org/" class="px-12 py-4" target="_blank"><g-image src="~/images/marc-logo.jpg" width="120" alt="Mid-America Regional Council logo"/></a>
          <a href="https://ticoproductions.com/" class="px-12 py-4" target="_blank"><g-image src="~/images/tico-logo.png" width="120" alt="Tico Productions company logo"/></a>
          <a href="https://www.idealect.is/" class="px-12 py-4" target="_blank"><g-image src="~/images/idealect-logo.png" width="120" alt="Idealect company logo"/></a>
          <a href="https://www.kcdigitaldrive.org/" class="px-12 py-4" target="_blank"><g-image src="~/images/kcdd-logo.png" width="120" alt="KC Digital Drive company logo"/></a>
          <a href="https://www.vmlyr.com/" class="px-12 py-4" target="_blank"><g-image src="~/images/vmlyr-logo.png" width="120" alt="VMLY&R company logo"/></a>
        </div>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import TwoColumnSection from '@/components/TwoColumnSection.vue'
import ThreeColumnSection from '@/components/ThreeColumnSection.vue'
import AccordionItem from '@/components/AccordionItem.vue'
import PageHeader from '@/components/PageHeader'
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'

export default {
  metaInfo: {
    title: 'Kansas City COVID 19 Response, Cases & Tracking App',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'COMEBACK KC is a COVID-19 task force supporting testing, tracking, and safely reopening Kansas City. Learn more & download the COVID Safe Paths App here.'
      }
    ]
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, TwoColumnSection, ThreeColumnSection, AccordionItem, PageHeader, MailchimpSubscribe },
  data() {
    return {
      newsletterEmailAddress: ''
    }
  },
  methods: {
    onError() {
      this.newsletterEmailAddress = ''
    },
    onSuccess() {
      // handle success
    }
  }
}

// holding pen for health department logos
//          <a href="https://www.casscounty.com/health" class="px-8 py-4" target="_blank">
//            <g-image src="~/images/cass-county-health-department-logo.jpg" width="200" alt="Cass County Health Department" />
//          </a>
//          <a href="https://www.clayhealth.com/" class="px-8 py-4" target="_blank">
//            <g-image src="~/images/clay-county-public-health-center-logo.jpg" width="200" alt="Clay County Public Health Center" />
//          </a>
</script>
