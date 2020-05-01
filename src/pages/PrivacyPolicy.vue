<template>
  <Layout>
    <FullWidthSection class="md:h-screen-60 flex items-center" image="/images/temp-hero-1.jpg">
      <div class="container mx-auto text-center px-4 mx:pl-0 py-16 md:py-32">
        <h2 class="text-white font-bold text-6xl">Campaign Header</h2>
      </div>
    </FullWidthSection>
    <FullWidthSection>
      <div class="container mx-auto flex justify-center px-4 mx:pl-0 py-8 md:py-16">
        <div class="text-white font-sans text-4xl">Privacy Policy</div>
      </div>
    </FullWidthSection>
    <OneColumnSection>
      <div class="px-4 md:px-0 my-8 md:my-16">
        <h1 class="font-bold text-4xl mb-4">Privacy Policy</h1>
        <p>
          Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
          Vestibulum eu odio. Maecenas egestas arcu quis ligula mattis placerat.
        </p>
        <p>
          Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Cras varius. Quisque ut nisi. Etiam imperdiet imperdiet
          orci. Donec posuere vulputate arcu.
        </p>
        <p>
          Phasellus consectetuer vestibulum elit. Nunc nec neque. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce vulputate eleifend sapien. Donec mollis
          hendrerit risus.
        </p>
        <p>
          Praesent vestibulum dapibus nibh. Quisque id odio. Vestibulum volutpat pretium libero. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada
          velit leo quis pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
        <p>
          Vestibulum eu odio. Nulla consequat massa quis enim. Phasellus tempus. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Aenean posuere, tortor
          sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda
          rem dolores inventore iste reprehenderit maxime! Iusto.
        </p>
      </div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue';
import OneColumnSection from '@/components/OneColumnSection.vue';

export default {
  metaInfo: {
    title: 'COMEBACK KC Privacy Policy',
    meta: [{ key: 'description', name: 'description', content: 'Read the privacy policy for COMEBACK KC here.' }]
  },
  components: { FullWidthSection, OneColumnSection }
};
</script>
