<template>
<div>
    <!-- Your body content -->
    <section class="w-full h-1/2 bg-center bg-thisbg bg-cover bg-no-repeat">
        <div class="sticky z-0 h-full w-full">
            <img :src="this_img" class="absolute object-cover w-full h-full z-0">
            <div class="sticky top-1/2 px-4 mx-auto max-w-screen-xl text-center">
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <RouterLink to="/" class=" relative inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Home
                    </RouterLink>
                    <RouterLink to="/" class=" relative inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Check Out
                    </RouterLink>
                </div>
                <svg class="relative animate-bounce mt-4" width="100%" height="100%">
                    <image x="25%" y="25%" width="50%" height="50%" xlink:href="../assets/down-arrow.png" />
                </svg>
            </div>
        </div>

    </section>

    <div class="mb-4 border-b border-gray-200">
        <h1 class="font-bold text-3xl p-3">{{ info.Name }}</h1>
        <h1 class="p-3 justify-start">{{ info.Description }}</h1>
        <div class="container justify-start">
            <ul>
                <li class="text-start"><span class="text-lg p-1 font-bold text-emerald-600">Address:</span> {{ info.Address }}</li>
                <li class="text-start"><span class="text-lg p-1 font-bold text-emerald-600">Price Level:</span> {{ info.Price_level }}</li>
                <li class="text-start bg-green-500 flex w-fit p-1 rounded-lg"><a :href="info.WebUrl" class="text-lg font-bold text-slate-50 ">Link to Tripadvisor</a></li>
            </ul>
        </div>
        <ul class="flex flex-wrap -mb-px text-sm sm:text-md md:text-md font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="tripadvisor-tab" data-tabs-target="#tripadvisorbookings" type="button" role="tab" aria-controls="yourbookings" aria-selected="false">Tripadvisor Reviews</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="greengoing-tab" data-tabs-target="#greengoingbookings" type="button" role="tab" aria-controls="pastbookings" aria-selected="false">Greengoing Reviews</button>
            </li>
        </ul>
    </div>

    <div id="tab-content">
        <!-- tripadvisor content -->
        <div class="hidden p-4 rounded-lg bg-gray-50" id="tripadvisorbookings" role="tabpanel" aria-labelledby="tripadvisor-tab">
            <table id="ItineraryListings" class="justify-center items-center">
                        <reviewdata
                        v-for="review in this_reviews"
                        :revDate="review.date"
                        :revRate="review.rating"
                        :revImg="review.ratingImg"
                        :revText="review.text"
                        :revTitle="review.title"
                        >    
                        </reviewdata>
            </table>
        </div>
        <!-- Greengoing content -->
        <div class="hidden p-4 rounded-lg bg-gray-50" id="greengoingbookings" role="tabpanel" aria-labelledby="greengoing-tab">
        </div>
    </div>

</div>
</template>

<script setup>
import {initFlowbite} from 'flowbite';
import {currentID} from '../db/localstore.js';
import {getDocument} from '../db/dbfunctions';
import {db} from '../db/FireBaseDB';
import { onMounted, Suspense } from 'vue';
import reviewdata from '../components/reviewdata.vue'
import { RouterLink } from 'vue-router';

onMounted(initFlowbite)

const thisID = currentID.currentID
console.log(thisID)
const info = await getDocument(thisID, db)
console.log(info)
const this_reviews = info.reviews
const this_img = info.images[0]
console.log(this_img)
console.log(this_reviews)

console.log(currentID.currentID)





</script>
