<template>
  <div class="flex flex-col flex-grow">
    <div class="w-full h-16 bg-kc-covid-black flex-grow-0">
      <div class="h-full container mx-auto flex">
        <nav class="text-right flex-grow items-center px-2 mx:pl-0">
          <ul class="inline-flex items-center h-full">
            <li class="mr-4"><g-link class="text-white underline" to="/">Home</g-link></li>
            <li><g-link class="text-white underline" to="/faqs/">FAQs</g-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <div class="w-full bg-kc-covid-black flex-grow-0">
      <div class="h-32 container mx-auto content-center">
        <div class="h-full text-white flex items-center">
          <div class="w-full text-center">
            <div class="mb-4">Site Footer</div>
            <div><g-link to="/privacy-policy/" class="underline">Privacy Policy</g-link> | <g-link to="/terms-of-use/" class="underline">Terms of Use</g-link></div>
          </div>
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
