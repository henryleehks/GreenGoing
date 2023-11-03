<template>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <RouterLink to="/listing/{{ id }}">
        <img class="p-8 rounded-t-lg" src={{ imageUrl }} alt="product image" />
    </RouterLink>
    <div class="px-5 pb-5">
        <RouterLink to="listing">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            </h5>
        </RouterLink>
        <div class="flex items-center mt-2.5 mb-5">
            <img src={{ ratingUrl }}>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {{ rating }}
            </span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ price_lvl }}</span>
            <Routerlink to="listing" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
            </Routerlink>
        </div>
    </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { getTADetails, getTAPhotos, APIKey } from '../db/tripadvisor'

defineProps({
    id: String,
})


details = getTADetails(APIKey,id)
const rating = details.rating
const ratingUrl = details.ratingImg
const price_lvl = details.price

photo = getTAPhotos(APIKey, id)





</script>



<style>

</style>
