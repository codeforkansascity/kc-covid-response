<template>
  <Layout language="en">
     <OneColumnSection>
          <div class="px-8 py-8 md:py-16 md:px-64">
            <p class="text-xl text-center">
                <h1>Help KC Make a Comeback Against COVID-19</h1>

                <p>COVID-19 is hitting our KC region hard, and it is hurting our most vulnerable communities hardest of all. The pandemic is taking a toll in lives, health, businesses, and our sense of community. Comeback KC is a regional public-private partnership in support of a Testing, Tracing, and Supported Self-Isolation (TTSI) strategy to eliminate COVID-19 from the metro area.</p>

               <p>We are providing operational support to individual health departments and leadership to build capacity across jurisdictions. Our strength is the ability to put resources to work quickly to address urgent needs and opportunities. We have accomplished a great deal over the past three months with very little. We need your support in order to do more.</p>
            </p>
          </div>
      </OneColumnSection>    
      <OneColumnSection>
          <div class="px-8 py-8 md:py-16 md:px-64">
            <p class="text-xl text-center">

              <vue-form :model="form" style="width: 500px;" label-position="right" label-width="150px" ref="form">
                <vue-form-item field="email" label="Email">
                  <vue-input v-model="form.email" name="email" v-validate="'required|email'"  style="width: 100%"></vue-input>
                </vue-form-item>
                <vue-form-item field="password" label="Password">
                  <vue-input v-model="form.password" name="password" v-validate="'required'"></vue-input>
                </vue-form-item>
                <vue-form-item field="delivery" label="Delivery">
                  <vue-radio v-model="form.delivery" name="delivery" v-validate="'required'" value="1">Radio 1</vue-radio>
                  <vue-radio v-model="form.delivery" name="delivery" v-validate="'required'" value="2">Radio 2</vue-radio>
                </vue-form-item>
                <vue-form-item field="city" label="City">
                  <vue-select v-model="form.city" :data="options" name="city" v-validate="'required'" placeholder="Select">
                    <vue-option v-for="i in options" :key="i.value" :value="i.value" :label="i.label"></vue-option>
                  </vue-select>
                </vue-form-item>
                <vue-form-item field="terms" label="Terms">
                  <vue-checkbox v-model="form.terms" name="terms" v-validate="'required:true'">I'm agree</vue-checkbox>
                </vue-form-item>
                <vue-form-item>
                  <vue-button @click="onSubmit" type="success">Submit</vue-button>
                </vue-form-item>
              </vue-form>

            </p>
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
import 'vfc/dist/vfc.css'
import {
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  Select,
  Option,
  Form,
  FormItem,
  FormBuilder
} from 'vfc'

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
  components: { FullWidthSection, OneColumnSection, MailchimpSubscribe, [Input.name]: Input, [Select.name]: Select, [Option.name]: Option, [Radio.name]: Radio, [Checkbox.name]: Checkbox, [Button.name]: Button, [Form.name]: Form, [FormItem.name]: FormItem, [CheckboxGroup.name]: CheckboxGroup, [FormBuilder.name]: FormBuilder },
  data () {
      return {
        options: [{ label: 'City 1', value: 1}, {label: 'City 2', value: 2}],
        form: {
          email: '',
          password: '',
          terms: false,
          delivery: '',
          city: '',
        }
      }
    },
    methods: {
      async onSubmit () {
        const res = await this.$validator.validate()
        if (res) alert('Form is valid')
      }
    }
}
</script>

<style>
</style>


