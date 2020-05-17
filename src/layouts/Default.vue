<template>
  <div class="layout">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>