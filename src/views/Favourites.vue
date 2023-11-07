<template>
    <div id="PageContent" class="">

        <div id="itinerary-content">

            <div class="relative inline-flex items-center overflow-hidden">
                <img class="w-full h:auto opacity-80 rounded-b-2xl" src="src/assets/fav_background.jpg">
                <div class="absolute left-4 top-16 sm:top-24 md:top-32 lg:top-48">
                    <h1
                        class="pb-2 font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-white">
                        Your Favorites</h1>
                    <h1 class="pb-2 text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white">
                        Begin your journey towards
                        <mark class="px-2 text-white bg-emerald-600 rounded dark:bg-blue-500">sustainability</mark>.</h1>
                </div>
                <!-- itinerary search -->
                <!-- <div id="itinerary-search"
                    class="container justify-center absolute left-0 mt-40 md:mt-45 lg:mt-40 xl:mt-40">


                    <form class="ml-10 mb-5 w-1/3">
                        <label for="default-search"
                            class="mb-2 mx-5 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">

                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>

                            <input type="search" id="default-search-itinerary"
                                class="w-full block p-2.5 pl-8 pr-12 text-xs text-gray-900 border border-gray-300 rounded-lg bg-grey-200"
                                placeholder='Search Experiences!' required>

                            <button type="submit"
                                class="text-white absolute right-1 bottom-1.5 bg-neutral-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-[#50A060] font-xsmall rounded-md text-xs px-1 py-1">Search</button>
                        </div>
                    </form>


                </div> -->

            </div>

        </div>

        <!-- Favourites as Cards -->

        <div id="featured-listings" class="px-6 pt-2 pb-12 mb-24 w-full bg-gradient-to-b from-[bisque] to-[#A6CEAE]">

            <div id="header-featured-listings" class="px-6 my-5">

                <h1
                    class="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    <mark class="px-4 text-white font-bold bg-green-600 rounded dark:bg-green-500">Your Journey
                        Awaits</mark>
                </h1>
                <p class="font-bold text-lg text-gray-500 lg:text-xl dark:text-gray-400 text-center">
                    Book your next eco-trip to Singapore now!
                </p>
            </div>

            <div v-if="currentUser.UserID !== ''" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center content-center">
                    <itemCardVue v-for="doc of allDocs" :cardID=doc.ID :cardName=doc.Name
                                :cardImg=doc.images[0] :cardRating=doc.rating :cardRatingImg=doc.rating_img
                                :card-price=doc.Price_level>
                    </itemCardVue>

            </div>
        </div>
    </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import itemCardVue from '../components/itemCard.vue'
import { searchUser, getDocument } from '../db/dbfunctions.js'
import { currentUser } from '../db/localstore.js';
import {db} from '../db/FireBaseDB'
initFlowbite()

const current_userID = currentUser.UserID
console.log(current_userID)

const userObj = await searchUser('6deIRHCpKD7ms58K2L2',db)
console.log(userObj)

const favourites = userObj.Favourites

var allDocs = []

for (let id of favourites){
    let to_add = await getDocument(id,db)
    allDocs.push(to_add)
}

console.log(allDocs)

</script>

<style>
.animate-up {
    animation: FlyUpAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes FlyUpAnimation {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>