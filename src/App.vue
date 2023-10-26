<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footerfoot from './components/Footer.vue'

</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
    

    

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

    <Footerfoot></Footerfoot>



  <RouterView />
</template>

<style>

</style>
