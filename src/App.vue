<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footerfoot from './components/Footer.vue'
import { Suspense } from 'vue';

</script>

<template>
  <div class="h-screen w-screen flex flex-col">

    <div class="flex" style="height: 88px;">
      <navbar></navbar>
    </div>

    <div class="flex flex-1 bg-gray-100 overflow-auto">
      <Suspense>
        <RouterView :key="$route.path" class="w-full h-full"></RouterView>
      </Suspense>
    </div>

    <div class="flex h-10 bg-gray-200" style="height: auto;">
      <Footerfoot></Footerfoot>
    </div>
  </div>
</template>

<style>
#pageContent {
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
