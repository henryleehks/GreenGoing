<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footerfoot from './components/Footer.vue'
import HomepageCarousel from './components/HomepageCarousel.vue'

</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
    <body>
      <HomepageCarousel></HomepageCarousel>
    </body>
    

    

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

    <Footerfoot></Footerfoot>



  <RouterView />
</template>

<style>

</style>
