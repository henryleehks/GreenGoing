<template>
<div>
    <!-- Your body content -->
    <section class="w-full h-1/2 bg-center bg-thisbg bg-cover bg-no-repeat">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-40 lg:py-45">
            <h1 id="text" class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl rounded-lg">View Product</h1>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Home
                </a>
                <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Check Out
                </a>
            </div>
            <svg class="animate-bounce mt-4" width="100%" height="100%">
                <image x="25%" y="25%" width="50%" height="50%" xlink:href="../assets/down_arrow.png" />
            </svg>
        </div>
    </section>

    <div class="mb-4 border-b border-gray-200">
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
        <!-- Your Bookings content -->
        <div class="hidden p-4 rounded-lg bg-gray-50" id="tripadvisorbookings" role="tabpanel" aria-labelledby="tripadvisor-tab">
            hellow world
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
        <div class="hidden p-4 rounded-lg bg-gray-50" id="greengoingbookings" role="tabpanel" aria-labelledby="greengoing-tab">
            hello world 2
        </div>
    </div>

</div>
</template>

<script setup>
import {
    initFlowbite
} from 'flowbite';
import {
    currentID
} from '../db/localstore.js';
import {
    getDocument
} from '../db/dbfunctions';
import {
    db
} from '../db/FireBaseDB';
import { onMounted, Suspense } from 'vue';
import reviewdata from '../components/reviewdata.vue'

onMounted(initFlowbite)

const thisID = currentID.currentID
console.log(thisID)
const info = await getDocument(thisID, db)
console.log(info)
const this_reviews = info.reviews
console.log(this_reviews)

console.log(currentID.currentID)





</script>
