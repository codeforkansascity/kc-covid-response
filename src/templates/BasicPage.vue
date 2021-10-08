<template>
  <Layout>
    <OneColumnSection class="px-4 my-8 md:my-16">
      <div class="my-8 md:my-16">
        <h2 class="text-5xl" v-html="$page.basicPage.title"></h2>
      </div>
      <div v-html="styleRawHTML($page.basicPage.content)"></div>
    </OneColumnSection>
  </Layout>
</template>

<script>
import FullWidthSection from '@/components/FullWidthSection.vue'
import OneColumnSection from '@/components/OneColumnSection.vue'
import PageHeader from '@/components/PageHeader.vue'
import { rawHtmlMixin } from '@/mixins/rawHtmlMixin.js'

function evalScripts() {
  const scripts = document.querySelectorAll("script");
  scripts.forEach((script) => {
    if (script.childNodes.length > 0)
    {
      if (script.childNodes[0].nodeValue.includes("vizElement"))
      {
        console.log(script);
        eval(script.innerHTML); 
      }
     }
  });
  //This SeamlessOpenForms is specific to USOpenForms to get an openform to render every time 
  //the page is refreshed or viewed.
  if (typeof(SeamlessOpenForms) != 'undefined')
  {
      SeamlessOpenForms.loadOpenForms();
  }
  else {
      const openforms = document.querySelectorAll(".openforms-embed");
      if (openforms.length>0)
      {
        console.log("missing SeamlessForms: " + window.location.pathname);
        const scriptPromise = new Promise((resolve, reject) => {
          var scriptElement = document.createElement('script');  
          document.body.appendChild(scriptElement);
          scriptElement.src = 'https://us.openforms.com/Scripts/embed-iframe.js';  
          scriptElement.onload = resolve;
          scriptElement.async = true;
        });
        scriptPromise.then(() => { SeamlessOpenForms.loadOpenForms();});
    }
  };
}

export default {
   mounted() {
     console.log("mounted basic: " + window.location.pathname);
    evalScripts()
    
  },
  updated() {
    console.log("updated basic: " + window.location.pathname);
    evalScripts()
  },
  metaInfo() {
    return {
      title: this.$page.basicPage.title,
      meta: [{ key: 'description', name: 'description', content: this.$page.basicPage.metaDescription },{ key: 'og:title', name: 'og:title', content: this.$page.basicPage.title },{ key: 'og:description', name: 'og:description', content: this.$page.basicPage.ogDescription },{ key: 'og:image', name: 'og:image', content: 'https://comebackkc.com' + this.$page.basicPage.ogImage }]
    }
  },
  mixins: [rawHtmlMixin],
  components: { FullWidthSection, OneColumnSection, PageHeader }
}
</script>

<style>
  #viz1593630719605 iframe.tableauViz {
    width: 100% !important;
    height: 700px !important;
  }
</style>

<page-query>
query ($id: ID!) {
  basicPage(id: $id) {
    title
    metaDescription
    ogDescription
    ogImage
    content
  }
}
</page-query>