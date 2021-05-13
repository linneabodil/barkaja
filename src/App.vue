<template>
  <div id="app">
    <Header />
    <Hero />
    <Foodmenu />
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
    this.$store.dispatch('getMenu');
  }
}

</script>

<style lang="scss">

@import './scss/main.scss';

</style>
