<template>
  <div class="flex flex-col flex-grow">
    <div class="w-full h-16 bg-kc-covid-black flex-grow-0">
      <div class="h-full container mx-auto flex">
        <nav class="text-right flex-grow items-center">
          <ul class="inline-flex items-center h-full">
            <li class="mr-4"><g-link class="text-white" to="/">Home</g-link></li>
            <li><g-link class="text-white" to="/faqs/">FAQs</g-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <div class="w-full bg-kc-covid-black flex-grow-0">
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
