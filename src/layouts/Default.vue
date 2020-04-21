<template>
  <div>
    <div class="w-full h-16 bg-kc-covid-darkblue content-center">
      <div class="h-16 w-16 mx-auto">
        <g-image src="~/images/logo.jpg" />
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
