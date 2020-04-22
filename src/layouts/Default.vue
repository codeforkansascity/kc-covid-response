<template>
  <div>
    <div class="w-full h-16 bg-kc-covid-darkblue">
      <div class="container mx-auto flex">
        <div class="w-1/3"></div>
        <div class="w-1/3">
          <img class="h-16 w-16 mx-auto" src="/images/kc-heart-logo-100.jpg" />
        </div>
        <nav class="w-1/3 text-right">
          <ul class="inline-flex items-center h-full">
            <li class="mr-4"><g-link class="text-white" to="/">Home</g-link></li>
            <li><g-link class="text-white" to="/faqs/">FAQs</g-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <slot />
    <div class="w-full bg-kc-covid-darkblue">
      <div class="h-16 container mx-auto content-center">
        <div class="h-full text-white flex justify-center items-center">
          <div>Site Footer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
