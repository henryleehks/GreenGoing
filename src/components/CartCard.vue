<template>
  <div
    class="w-full h-full m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <RouterLink :to="cardURL" class="flex h-1/2 m-5 justify-center" @click="currentID.updateCurrentID(theURL)">
      <img class="object-cover object-center h-full rounded-lg" :src="cardImg" alt="product image" />
    </RouterLink>

    <div class="px-5 pb-5 mx-auto">

      <RouterLink :to="cardURL" @click="currentID.updateCurrentID(theURL)">
        <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
          {{ cardName }}
        </h5>
      </RouterLink>

      <div class="flex items-center mt-2.5 mb-5">
        <img :src="cardRatingImg" />
        <span
          class="bg-green-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          Rating: {{ cardRating }}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-gray-900 dark:text-white">{{
          cardPrice
        }}</span>
        <RouterLink :to="cardURL" @click="currentID.updateCurrentID(theURL)"
          class="transition duration-500 ease-in-out bg-green-500 text-white sm:text-black sm:bg-white sm:border sm:border-black hover:border-white hover:bg-green-500 hover:text-white hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center">
          View
        </RouterLink>
        <button
          class="transition duration-500 ease-in-out bg-green-500 text-white sm:text-black sm:bg-white sm:border sm:border-black hover:border-white hover:bg-green-500 hover:text-white hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center">
          Cart
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { currentID } from "../db/localstore.js";

const props = defineProps([
  "cardName",
  "cardID",
  "cardImg",
  "cardRating",
  "cardRatingImg",
  "cardPrice",
]);

const theURL = ref(props.cardID);
const cardURL = "/listing/" + theURL.value;

// const cardURL = "/listing/" + ref(props.cardID)
</script>
  
<style></style>
  