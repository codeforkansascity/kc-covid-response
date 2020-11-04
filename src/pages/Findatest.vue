<template>
  <Layout language="en">
    <OneColumnSection class="px-4 mt-8 md:mt-16">
      <h2 class="text-4xl">Find a Test</h2>
<div></br>
  Do you have a doctor?
  <select name="doctor" id="doctor">
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select></br></br>
  Do you have health insurance?
  <select name="insurance" id="insurance">
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
</br></br>
  Where do you live?
  <select name="live" id="live" @change="dostuff()" >
    <option disabled selected value> -- select an option -- </option>
    <option value="cass">Cass</option>
    <option value="clay">Clay</option>
    <option value="jackson">Jackson</option>
    <option value="johnson">Johnson</option>
    <option value="kcmo">KCMO</option>
    <option value="platte">Platte</option>
    <option value="wyandotte">Wyandotte</option>
  </select></br></br>
  <p id="demo"></p>
                  </div>
      </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import PageHeader from '@/components/PageHeader.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'
export default {
  metaInfo: {
    title: 'ComeBackKC Gallery',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ''
      }
    ]
  },
  methods: {
    dostuff() {
                    var x = document.getElementById("live").value;
                    if (x == 'cass' )
                      document.getElementById("demo").innerHTML = "Please call your primary care provider first. If you can't get tested through them, please visit: <a class='underline' href='https://www.casscounty.com/2450/COVID-19' target='_blank' rel='noopener'>https://www.casscounty.com/2450/COVID-19</a>.";
                    if (x == 'clay' )
                      document.getElementById("demo").innerHTML = "Please visit <a class='underline' href='https://clayhealth.com/test' target='_blank' rel='noopener'>clayhealth.com/test</a> for a list of local options.";
                      if (x == 'jackson' )
                      document.getElementById("demo").innerHTML = "To get a test,visit <a class='underline' href='https://jacohd.org/events/' target='_blank' rel='noopener'>https://jacohd.org/events/</a>. ";
                      if (x == 'johnson' )
                      document.getElementById("demo").innerHTML = "Please call your primary care provider first. If you can't get tested through them, visit <a class='underline' href='https://www.jocogov.org/schedule-covid-19-test' target='_blank' rel='noopener'>https://www.jocogov.org/schedule-covid-19-test</a>.";
                      if (x == 'kcmo' )
                      document.getElementById("demo").innerHTML = "Please call 311 to make an appointment. Some walk-up appointments may be available at pop-up events. To see weekly test locations, visit <a class='underline' href='https://bit.ly/kcmotest' target='_blank' rel='noopener'>https://bit.ly/kcmotest</a>";
                      if (x == 'platte' )
                      document.getElementById("demo").innerHTML = "Please fill out this self-reporting tool: <a class='underline' href='https://bit.ly/plattetest' target='_blank' rel='noopener'>https://bit.ly/plattetest</a>";
                      if (x == 'wyandotte' )
                      document.getElementById("demo").innerHTML = "If you have COVID-19 symptoms or if you have been exposed to someone who has COVID-19, call 311 or visit <a class='underline' href='http://wycokck.org/COVID-19' target='_blank' rel='noopener'>wycokck.org/COVID-19</a> to find out about free testing. If you don't have symptoms and haven't been exposed, visit <a class='underline' href='https://hearttoheart.org/covid19testing' target='_blank' rel='noopener'>hearttoheart.org/covid19testing</a> to learn about asymptomatic testing.";
                  }
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, PageHeader }
}
</script>