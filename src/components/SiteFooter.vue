<template>
  <div class="h-32 container mx-auto content-center">
    <div class="h-full text-white flex flex-col md:flex-row justify-around md:justify-between items-center">
      <ul class="flex items-center">
        <li>
          <a href="https://twitter.com/comebackkc" class="underline" target="_blank"><font-awesome class="mr-4" :icon="['fab', 'twitter']" size="lg"></font-awesome></a>
        </li>
        <li>
          <a href="https://www.facebook.com/Comeback-KC-107935990899809/" class="underline" target="_blank"
            ><font-awesome class="mr-4" :icon="['fab', 'facebook']" size="lg"></font-awesome
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/comeback_kc/" class="underline" target="_blank"><font-awesome class="mr-4" :icon="['fab', 'instagram']" size="lg"></font-awesome></a>
        </li>
      </ul>
      <ul class="flex items-center">
        <li><g-link to="/privacy-policy/" class="font-bold uppercase hover:underline mr-4">Privacy Policy</g-link></li>
        <li><g-link to="/terms-of-use/" class="font-bold uppercase hover:underline">Terms of Use</g-link></li>
      </ul>
    </div>
  </div>
</template>
