<template>
  <Layout language="en">
     <OneColumnSection>
          <div class="px-8 py-8 md:py-16 md:px-64">
            <p class="text-xl text-center">
                <h1>Help KC Make a Comeback Against COVID-19</h1>

                <p>COVID-19 is hitting our KC region hard, and it is hurting our most vulnerable communities hardest of all. The pandemic is taking a toll in lives, health, businesses, and our sense of community. Comeback KC is a regional public-private partnership in support of a Testing, Tracing, and Supported Self-Isolation (TTSI) strategy to eliminate COVID-19 from the metro area.</p>

               <p>We are providing operational support to individual health departments and leadership to build capacity across jurisdictions. Our strength is the ability to put resources to work quickly to address urgent needs and opportunities. We have accomplished a great deal over the past three months with very little. We need your support in order to do more.</p>
            </p>
            <p>&nbsp;</p>

          <h2>Make a Donation</h2>

            <ValidationObserver v-slot="{ invalid }" >
              <form @submit.prevent="onSubmit" id="payment-form" > <!-- action="/charge" method="post" -->

                <div>
                  <ValidationProvider rules="min_value:25" v-slot="{ errors }" name="donation" class="form-group">
                        <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 mb-4 border border-white">
                          <label for="twentyfive" class="inline-flex items-center">
                            <input type="radio" id="twentyfive" class="form-radio text-comebackkc-darkblue h-4 w-4" value="25" v-model="amount" >
                            <span>&nbsp;$25</span>
                          </label>
                        </div>
                        <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 border border-white">
                          <label for="fifty"  class="inline-flex items-center">
                            <input type="radio" id="fifty" class="form-radio text-comebackkc-darkblue h-4 w-4" value="50" v-model="amount" >
                            <span>&nbsp;$50</span>
                          </label>
                        </div>
                        <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 border border-white">
                          <label for="onehundred" class="inline-flex items-center">
                            <input type="radio" id="onehundred" class="form-radio text-comebackkc-darkblue h-4 w-4" value="100" v-model="amount" >
                            <span>&nbsp;$100</span>
                          </label>
                        </div>
                        <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 border border-white">
                          <label for="twofifty" class="inline-flex items-center">
                            <input type="radio" id="twofifty" class="form-radio text-comebackkc-darkblue h-4 w-4" value="250" v-model="amount" >
                            <span>&nbsp;$250</span>
                          </label>
                        </div>
                        <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 border border-white">
                          <label for="fivehundred" class="inline-flex items-center">
                            <input type="radio" id="fivehundred" class="form-radio text-comebackkc-darkblue h-4 w-4" value="500" v-model="amount" >
                            <span>&nbsp;$500</span>
                          </label>
                        </div>
                        <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 border border-white">
                          <label for="onethousand" class="inline-flex items-center">
                            <input type="radio" id="onethousand" class="form-radio text-comebackkc-darkblue h-4 w-4" value="1000" v-model="amount">
                            <span>&nbsp;$1000</span>
                          </label>
                        </div>
                        <span class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</span>
                        <!-- <span>Amount: {{ amount }}</span> -->
                   </ValidationProvider>
               </div>

                <div>
                  <ValidationProvider v-slot="{ errors }" name="paymentMethod"  class="form-group">
                      <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 mb-4 border border-white">
                        <label for="stripe" class="inline-flex items-center">
                          <input type="radio" id="stripe" class="form-radio text-comebackkc-darkblue h-4 w-4" value="stripe" v-model="paymentMethod">
                          <span>&nbsp;Credit Card</span>
                        </label>
                      </div>
                      <div class="inline-block bg-comebackkc-darkblue hover:bg-comebackkc-red text-white font-bold py-2 px-4 border border-white">
                        <label for="ach" class="inline-flex items-center">
                          <input type="radio" id="ach" class="form-radio text-comebackkc-darkblue h-4 w-4" value="ach" v-model="paymentMethod">
                          <span>&nbsp;eCheck</span>
                       </label>
                          <span class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</span>
                          <!-- <span>Method: {{ paymentMethod }}</span> -->
                      </div>
                   </ValidationProvider>
               </div>


                <!-- PAYMENT METHODs -->

                <!-- Stripe card form -->
                <!-- <form method="POST" action="" id="card" v-if="paymentMethod=='stripe'"> -->
                  <div id="card" v-show="paymentMethod=='stripe'" class="mb-8 mt-8 border border-comebackkc-darkblue px-8 py-8 text-lg">
                    <div id="card-element"></div>
                  </div>
                  <div id="card-errors" role="alert" class="text-comebackkc-red text-sm font-medium pl-8 mb-4"></div>
                <!-- </form> -->

                <!-- ACH  form -->

                <!-- this is a placeholder, not the real element -->
                <!-- <div id="card" v-show="paymentMethod=='ach'">
                    <div id="ach-element"></div>
                  </div>
                  <div id="card-errors" role="alert"></div> -->

                <!-- TBD -->


                <p>Donations to support Comeback KC can be made to KC Digital Drive, the regional civic non-profit that serves as the backbone organization for the public-private partnership. Funds will be used to continue to support both operational and communications aspects of fighting COVID-19. Our operational efforts are focused on building tools, strategy and capacity for testing, tracing, and supported self-isolation. Our communications efforts will continue to provide unified, regional messaging that reaches every corner of our metro, transcending state, county, racial, and political dividing lines.</p>

                <p>Our work is fast and responsive to emerging needs. Unlike traditional non-profit work, our outputs and outcomes will adapt to meet those needs in real time. [Click here to see an example of our impact so far.]</p>


                <div>
                  <label for="name"></label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="sourcetype" class="form-group">
                    <select v-model="gift" class="shadow border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none">
                      <option disabled selected value="">This gift is from:</option>
                      <option value="individual" > An individual</option>
                      <option value="company"> A company or organization</option>
                    </select>
                      <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                      <!-- <span>Amount: {{ amount }}</span> -->   
                  </ValidationProvider>
                </div>

                <ValidationProvider name="companyName" rules="" v-slot="{ errors }">
                  <input v-model="companyName" type="text" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" v-if="gift=='company'" placeholder="Company or organization name *" >
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>

                <div>
                  <!-- <label for="name">Title</label> -->
                  <ValidationProvider rules="required" v-slot="{ errors }" name="title" class="form-group">
                    <select v-model="title" class="shadow border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none">
                      <option disabled selected value="">Title *</option>
                      <option value="mr">Mr.</option>
                      <option value="dr">Dr.</option>
                      <option value="mrs">Mrs.</option>
                      <option value="miss">Miss</option>
                      <option value="ms">Ms.</option>
                      <option value="mx">Mx.</option>
                      <option value="tg">Tg.</option>
                      <option value="professor">Professor</option>
                      <option value="rabbi">Rabbi</option>
                      <option value="father">Father</option>
                      <option value="reverend">Reverend</option>
                      <option value="sister">Sister</option>
                      <option value="">No Title</option>
                    </select>
                      <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                      <!-- <span>Amount: {{ amount }}</span> -->   
                  </ValidationProvider>
                </div>


                <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
                  <input v-model="firstName" type="text" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" placeholder="First Name *">
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>

                <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ errors }">
                  <input v-model="lastName" type="text" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" placeholder="Last Name *">
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>


                <ValidationProvider name="streetaddress" rules="required" v-slot="{ errors }">
                  <input v-model="streetaddress" type="streetaddress" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" placeholder="Street Address *">
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>

                <ValidationProvider name="aptsuitebldg" rules="" v-slot="{ errors }">
                  <input v-model="aptsuitebldg" type="aptsuitebldg" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" placeholder="Apt, Suite, Building">
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>

                <ValidationProvider name="city" rules="required|alpha_spaces" v-slot="{ errors }">
                  <input v-model="city" type="city" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" placeholder="City *">
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>

                <div>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="state" class="form-group">
                    <select id="state" v-model="state" class="shadow border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none">
                      <option disabled selected value="">State *</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                      <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                      <!-- <span>Amount: {{ amount }}</span> -->   
                  </ValidationProvider>
                </div>


                <ValidationProvider name="zipcode" rules="digits:5" v-slot="{ errors }">
                  <input v-model="zipcode" type="zipccode" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none " placeholder="Zip Code *">
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>


                <div>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="country" class="form-group">
                    <select id="country" v-model="country" class="shadow border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none ">
                      <option disabled selected value="">Country *</option>
                      <option value="USA">United States</option>
                    </select>
                      <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                      <!-- <span>Amount: {{ amount }}</span> -->   
                  </ValidationProvider>
                </div>


                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                  <input v-model="email" type="email" class="shadow appearance-none border border-comebackkc-darkblue rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none " placeholder="Email *">
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>

                <!-- add to list -->

                <ValidationProvider name="mailingList" rules="" v-slot="{ errors }">
                  <label for="checkbox" class="inline-flex items-center">
                    <input type="checkbox" id="checkbox" v-model="mailingList" class="form-checkbox h-4 w-4 text-comebackkc-darkblue">
                    <span>&nbsp;I want to receive emails [copy FPO]</span>
                  </label>
                  <!-- <p class="text-comebackkc-red text-sm font-medium">{{ mailingList }}</p> -->
                  <p class="text-comebackkc-red text-sm font-medium">{{ errors[0] }}</p>
                </ValidationProvider>

                <button id="card-button" :data-secret="intentSecret" type="submit" :disabled="invalid" class="bg-comebackkc-darkblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ">Donate $ {{amount}}</button>

              </form>
            </ValidationObserver>

            <p>&nbsp;</p>
            <p>Donations are made to KC Digital Drive, a tax-exempt public charity under <a href="" target="_blank">section 501(c)(3) of the Internal Revenue Code</a>. EIN: 46-4502675</p>

          </div>
        </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import PageHeader from '@/components/PageHeader.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
//import { required, email, alpha } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

import en from "vee-validate/dist/locale/en.json"
localize("en", en);

////////
import {loadStripe} from '@stripe/stripe-js'

export default {
  metaInfo: {
    title: 'Donate to Comeback KC',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Donate to Comeback KC'
      }
    ]
  },
  mixins: [rawHtmlMixin],
  components: { OneColumnSection, ValidationProvider, ValidationObserver, MailchimpSubscribe },
  data: () => ({
    amount: null,
    gift: '',
    paymentMethod: '',
    title: '',
    email: '',
    firstName: '',
    lastName: '',
    streetaddress: '',
    aptsuitebldg: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    intentSecret: '',
    companyName: '',
    mailingList: '',
    loadStripe: '',
    stripe: '',
    elements: '',
    card: '',
    style:''
  }),
  methods: {

    async setupStripe() {
      var style = {
        base: {
          fontSmoothing: 'antialiased',
          fontSize: '18px',
          '::placeholder': {
            color: '#4a5568'
          }
        },
        invalid: {
          color: '#D9353F',
          iconColor: '#D9353F'
        }
      };
      const stripe = await loadStripe('pk_test_HJbZz5wJaAmUL8fzcotcpfoQ');
      var elements = stripe.elements();
      var card = elements.create('card', {style: style});
      card.mount('#card-element');

      // Handle real-time validation errors from the card Element.
      card.on('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

    },

    onSubmit () {
      alert("Form Submitted!");
      // https://stripe.com/docs/stripe-js
    }

  },
  mounted() {

    this.setupStripe();

  }
}
</script>

<style>
</style>


