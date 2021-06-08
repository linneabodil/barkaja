<template>
  <div id="app">
    <Header />
    <Hero />
    <Foodmenu v-if="loaded" />
    <Maps />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Foodmenu from '@/components/Foodmenu.vue'
import Maps from '@/components/Maps.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      loaded: false
    }
  },
  name: 'App',
  components: {
    Header,
    Hero,
    Foodmenu,
    Maps,
    Footer
  },
  beforeMount() {
    this.$store.dispatch('getMenu');
  },
  mounted() {
    this.loaded = true
  }
}

</script>

<style lang="scss">

@import './scss/main.scss';

</style>
