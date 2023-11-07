<template>
    <div
        class="w-full h-full m-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 align-bottom">
        <RouterLink :to=cardURL class='flex h-1/2 justify-center' @click="currentID.updateCurrentID(theURL)">
            <img class="object-cover object-center h-full" :src="cardImg" alt="product image" />
        </RouterLink>
        <div class="p-5 mx-auto">
            <RouterLink :to=cardURL @click="currentID.updateCurrentID(theURL)">
                <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{ cardName }}
                </h5>
            </RouterLink>
            <div class="align-bottom pb-0">
                <div class="flex items-center mt-2.5 mb-5">
                    <img :src="cardRatingImg">
                    <span
                        class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        Rating: {{ cardRating }}
                    </span>
                </div>
                <div class="flex items-center justify-between bottom-0">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ cardPrice }}</span>

                    <RouterLink :to=cardURL @click="currentID.updateCurrentID(theURL)"
                        class="transition duration-500 ease-in-out bg-green-500 text-white sm:text-black sm:bg-white sm:border sm:border-black hover:border-white hover:bg-green-500 hover:text-white hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        View
                    </RouterLink>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { currentID } from '../db/localstore.js'

const props = defineProps(['cardName', 'cardID', 'cardImg', 'cardRating', 'cardRatingImg', 'cardPrice'])

const theURL = ref(props.cardID)
const cardURL = "/listing/" + theURL.value

// const cardURL = "/listing/" + ref(props.cardID)

</script>



<style></style>
