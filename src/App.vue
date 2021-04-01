<template>
  <div id="app">
    <Header />
    <Hero />
    <Menu />
    <Maps />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Menu from '@/components/Menu.vue'
import Maps from '@/components/Maps.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Menu,
    Maps,
    Footer
  }
}

</script>

<style lang="scss">

@import './scss/main.scss';

</style>
