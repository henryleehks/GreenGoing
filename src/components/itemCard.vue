<template>

<div class="w-full h-full m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <RouterLink :to= cardURL class='flex h-1/2 m-5 justify-center' @click="currentID.updateCurrentID(theURL)">
        <img class="object-cover object-center h-full rounded-lg" :src="cardImg" alt="product image" />
    </RouterLink>
    <div class="px-5 pb-5 mx-auto">
        <RouterLink :to= cardURL @click="currentID.updateCurrentID(theURL)">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ cardName }}
            </h5>
        </RouterLink>
        <div class="flex items-center mt-2.5 mb-5">
            <img :src="cardRatingImg">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Rating: {{ cardRating }}
            </span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ cardPrice }}</span>
            <RouterLink :to= cardURL @click="currentID.updateCurrentID(theURL)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
            </RouterLink>
        </div>
    </div>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import {currentID} from '../db/localstore.js'

const props = defineProps(['cardName','cardID','cardImg','cardRating','cardRatingImg','cardPrice'])

const theURL = ref(props.cardID)
const cardURL = "/listing/" + theURL.value

// const cardURL = "/listing/" + ref(props.cardID)

</script>



<style>

</style>
