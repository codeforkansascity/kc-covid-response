<template>
  <Layout language="es">
    <OneColumnSection class="px-4 my-8 md:my-16">
      <h2 class="pb-8 text-4xl md:bp-16">Únete al Regreso</h2>
      <p>
        Regresar a Kansas City dependerá de todos nosotros. Por lo mismo, hemos puesto a disposición todos los recursos de nuestra campaña para descargarlos y compartirlos en sus
        redes sociales y más. Te invitamos a crear lo que quieras con la campaña* - contenido para los medios sociales, carteles, camisetas, etc. Si haces algo fantástico,
        ¡compártelo con nosotros! Nos encantaría ver que has creado.
      </p>
      <p class="my-8 text-center md:my-16">
        <a id="asset-download" class="px-8 py-4 font-bold text-white rounded-md bg-comebackkc-red" href="/comebackkc-assets.zip">Download The Assets</a>
      </p>
      <p>
        Condiciones:<br />
        Estos elementos se ofrecen bajo la licencia de Bienes Comunes Creativos y se permite su uso comercial. Pedimos que den crédito de manera adecuada incluyendo el enlace
        comebackkc.com, un URL o hashtag #comebackkc como un modo de atribución.
      </p>
      <p class="mb-0">
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank">
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
        </a>
      </p>
      <p>
        This work is licensed under a
        <a class="underline text-comebackkc-darkblue" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank">
          Creative Commons Attribution 4.0 International License
        </a>
        .
      </p>
      <p>
        <span class="font-bold">*IMPORTANTE:</span> Lo único que Regresa KC prohíbe expresamente es el uso de estos elementos para difundir información errónea o cualquier
        información contraria a los intereses de la salud pública según lo determinen los funcionarios regionales de salud pública. Aparte de esto, ¡haz lo que se te ocurra!
      </p>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'

export default {
  metaInfo: {
    title: 'Download COMEBACK KC Campaign Assets Here',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'All COMEBACK KC campaign assets are available for free download, usage on social channels, and more. Download the creative assets here.'
      }
    ]
  },
  components: { FullWidthSection, OneColumnSection }
}
</script>
