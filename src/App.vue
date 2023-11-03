<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footerfoot from './components/Footer.vue'

</script>

<template>

  
<div class="h-screen w-screen flex flex-col">

  <div class="flex" style="height: 88px;">
    <navbar></navbar>
  </div>

  <div class="flex flex-1 bg-gray-100 overflow-auto">
    <RouterView class="w-full h-full"></RouterView>
  </div>

  <div class="flex h-10 bg-gray-200" style="height: auto;">
    <Footerfoot></Footerfoot>
  </div>
</div>

</template>

<style></style>
