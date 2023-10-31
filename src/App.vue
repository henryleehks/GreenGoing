<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footerfoot from './components/Footer.vue'
import Homepage from './views/Homepage.vue'

</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
    <body>
      <Homepage></Homepage>
    </body>
    

    


    <Footerfoot></Footerfoot>



  <RouterView />
</template>

<style>

</style>
