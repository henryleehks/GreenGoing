<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footerfoot from './components/Footer.vue'

</script>

<template>
  <header>
    

    <div >
      <Navbar></Navbar>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

      <Footerfoot></Footerfoot>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
