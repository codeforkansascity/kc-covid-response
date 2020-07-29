---
language: en
title: Donate
metaDescription: Donate to Comeback KC
---

<h1>Help KC Make a Comeback Against COVID-19</h1>

COVID-19 is hitting our KC region hard, and it is hurting our most vulnerable communities hardest of all. The pandemic is taking a toll in lives, health, businesses, and our sense of community. Comeback KC is a regional public-private partnership in support of a Testing, Tracing, and Supported Self-Isolation (TTSI) strategy to eliminate COVID-19 from the metro area.

We are providing operational support to individual health departments and leadership to build capacity across jurisdictions. Our strength is the ability to put resources to work quickly to address urgent needs and opportunities. We have accomplished a great deal over the past three months with very little. We need your support in order to do more.




<form>
  <h2>Make a Donation</h2>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

  <input type="radio" id="twentyfive" name="amount" value="25">
  <label for="twentyfive">$25</label>
  <input type="radio" id="fifty" name="amount" value="50">
  <label for="fifty">$50</label>
  <input type="radio" id="onehundred" name="amount" value="100">
  <label for="onehundred">$100</label>
  <input type="radio" id="twofifty" name="amount" value="250">
  <label for="twofifty">$250</label>
  <input type="radio" id="fivehundred" name="amount" value="500">
  <label for="fivehundred">$500</label>
  <input type="radio" id="onethousand" name="amount" value="1000">
  <label for="onethousand">$1000</label>
</form>

<form>
  <input type="radio" id="stripe" name="method" value="stripe">
  <label for="stripe">Credit Card</label>
  <input type="radio" id="paypal" name="method" value="paypal">
  <label for="paypal">PayPal</label>
  <input type="radio" id="ach" name="method" value="ach">
  <label for="ach">eCheck</label>
</form>

<!-- Stripe card form -->
<form method="POST" action="" id="card" v-if="stripe">
  <div>
    <div id="card-element"></div>
  </div>
  <div id="card-errors"></div>
</form>

<!-- Stripe ACH form goes here if ACH via Stripe -->


Donations to support Comeback KC can be made to KC Digital Drive, the regional civic non-profit that serves as the backbone organization for the public-private partnership. Funds will be used to continue to support both operational and communications aspects of fighting COVID-19. Our operational efforts are focused on building tools, strategy and capacity for testing, tracing, and supported self-isolation. Our communications efforts will continue to provide unified, regional messaging that reaches every corner of our metro, transcending state, county, racial, and political dividing lines. 

Our work is fast and responsive to emerging needs. Unlike traditional non-profit work, our outputs and outcomes will adapt to meet those needs in real time. [Click here to see an example of our impact so far.]


<form method="POST" action="">
  <div>
    <label for="name">This gift is from:</label>
    <select id="giftsource" name="sourcetype">
      <option value="individual">An individual</option>
      <option value="company">A company or organization</option>
    </select>
     <div>
      <input type="text" id="companyname" name="companyname" placeholder="Company or organization name*" value required maxlength="100" aria-required="true" style="display:none;">
    </div>
  </div>
  <div>
    <select id="title" name="title">
      <option value="" selected>Title</option>
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
  </div>
  <div>
    <input type="text" id="firstname" name="firstname" placeholder="First Name*" value required maxlength="100" aria-required="true">
  </div>
  <div>
    <input type="text" id="lastname" name="lastname" placeholder="Last Name*" value required maxlength="100" aria-required="true">
  </div>
  <div>
    <input type="text" id="streetaddress" name="streetaddress" placeholder="Street address*" value required maxlength="100" aria-required="true">
  </div>
  <div>
    <input type="text" id="aptsuitebldg" name="aptsuitebldg" placeholder="Apt, Suite, Building" value maxlength="100">
  </div>
  <div>
    <input type="text" id="city" name="city" placeholder="City*" value required maxlength="100" aria-required="true">
  </div>
  <div>
    <select id="state" name="state">
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
  </div>  
  <div>
    <input type="number" id="zipcode" name="zipcode" placeholder="Zip Code*" value required maxlength="100" aria-required="true">
  </div>
  <div>
    <select id="country" name="country">
      <option value="USA">United States of America</option>
    </select>
  </div>
  <div>
    <input type="email" id="email" name="email" placeholder="Email*" value required maxlength="100" aria-required="true">
  </div>
  <div>
    <input type="checkbox" id="addtolist" name="addtolist" checked>
    <label for="name">I would like to receive emails from Comeback KC</label>
  </div>
</form>

  <div>
    <button id="card-button" data-secret="{{intentSecret}}">Donate</button>
  </div>

  <p>Donations are made to KC Digital Drive, a tax-exempt public charity under <a href="" target="_blank">section 501(c)(3) of the Internal Revenue Code</a>. EIN: 46-4502675</p>



<!-- Thank you page 

Thank you for helping the KC region fight back against COVID-19. 

Your donation has been processed. 

We will send your receipt to [email address].

Donations will be shown as:

KC Digital Drive
FBO Comeback KC -->