<template>
    <div id="PageContent" class="bg-gradient-to-b from-[bisque] to-[#A6CEAE]">

        <div id="itinerary-content">

            <div class="py-5 relative inline-flex items-center overflow-hidden">
                <img class="w-full h:auto opacity-50 rounded-r-2xl" src="src/assets/orchid.png">
                <h1
                    class="absolute left-4 top-11 sm:top-24 md:top-36 lg:top-44 font-extrabold leading-none tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Your Itinerary</h1>
                <h1
                    class="absolute left-4 top-25 md:top-30 text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white">
                    Your recent bookings towards a
                    healthier, greener city.</h1>

                <!-- itinerary search -->
                <div id="itinerary-search"
                    class="container justify-center absolute left-0 mt-40 md:mt-45 lg:mt-40 xl:mt-40">

                    <!-- </form> -->
                    <form class="ml-10 mb-5 w-1/3">
                        <label for="default-search"
                            class="mb-2 mx-5 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <!-- svg -->
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <!-- search bar -->
                            <input type="search" id="default-search-itinerary"
                                class="w-full block p-2.5 pl-8 pr-12 text-xs text-gray-900 border border-gray-300 rounded-lg bg-grey-200"
                                placeholder='Search Your Bookings!' required>
                            <!-- submit button -->
                            <button type="submit" v-on:click="SearchAllDocuments()"
                                class="text-white absolute right-1 bottom-1.5 bg-neutral-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-[#50A060] font-xsmall rounded-md text-xs px-1 py-1">Search</button>
                        </div>
                    </form>

                </div>

            </div>

            <!-- Your Bookings and Past Bookings tabs -->
            <div class="mb-4 border-b border-gray-200">
                <ul class="flex flex-wrap -mb-px text-sm sm:text-md md:text-md font-medium text-center" id="default-tab"
                    data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="yourbookings-tab"
                            data-tabs-target="#yourbookings" type="button" role="tab" aria-controls="yourbookings"
                            aria-selected="false">Your Bookings</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                            id="pastbookings-tab" data-tabs-target="#pastbookings" type="button" role="tab"
                            aria-controls="pastbookings" aria-selected="false">Past Bookings</button>
                    </li>
                </ul>
            </div>

            <div id="tab-content">
                <!-- Your Bookings content -->
                <div class="hidden p-4 rounded-lg bg-gray-50" id="yourbookings" role="tabpanel"
                    aria-labelledby="yourbookings-tab">
                    <table id="ItineraryListings" class="justify-center items-center">
                        <!-- <div v-if="SearchAllDocuments()">
                            <tableRowItinerary
                            v-for="result of results" :rowID=doc.ID :rowName=doc.Data.Name :rowImg=doc.Data.images[0] :rowDescript=doc.Description :rowRating=doc.Data.rating :rowRatingImg=doc.Data.rating_img>
                            </tableRowItinerary>  
                        </div> -->
                        <div>
                            <tableRowItinerary v-for="doc of allDocs" :rowID=doc.ID :rowName=doc.Data.Name
                                :rowImg=doc.Data.images[0] :rowDescript=doc.Description :rowRating=doc.Data.rating
                                :rowRatingImg=doc.Data.rating_img>
                            </tableRowItinerary>
                        </div>



                        <!-- <tableRowItinerary
                            v-for="doc of allDocs" :rowID=doc.ID :rowName=doc.Data.Name :rowImg=doc.Data.images[0] :rowDescript=doc.Description :rowRating=doc.Data.rating :rowRatingImg=doc.Data.rating_img>
                        </tableRowItinerary>
                         -->

                    </table>
                </div>


                <!-- Past booking content -->
                <div class="hidden p-4 rounded-lg bg-gray-50" id="pastbookings" role="tabpanel"
                    aria-labelledby="pastbookings-tab">
                    <table id="ItineraryListings" class="justify-center items-center">
                        <tableRowItinerary v-for="doc of allDocs" :rowID=doc.ID :rowName=doc.Data.Name
                            :rowImg=doc.Data.images[0] :rowDescript=doc.Description :rowRating=doc.Data.rating
                            :rowRatingImg=doc.Data.rating_img>
                        </tableRowItinerary>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>
    
    
<script>
import tableRowItinerary from '../components/tableRowItinerary.vue'
import { getAllDocuments } from '../db/dbfunctions.js'
import { SearchAllDocuments } from '../db/dbfunctions.js'
import { db } from '../db/FireBaseDB.js'
import { initFlowbite } from 'flowbite'






const allDocs = await getAllDocuments(db)
var searchInput = document.getElementById('default-search-itinerary')
var results = SearchAllDocuments(allDocs, searchInput)


export default {
    mounted() {
        console.log('hello');
        initFlowbite();

    },
    components: { tableRowItinerary },
    data() {
        return {
            allDocs,
        }

    }



}
</script>
    
    
<style>
#ItineraryListings {
    border-radius: 10px;
    margin: 10px auto 30px auto;
    padding: 10px 10px 10px 10px;
    width: 100%;
}

table {
    color: black;
}

td {
    padding: 10px;
}

tr {
    background-color: white;
}

tr:nth-child(even) {
    background-color: #F1F3F4;
}
</style>
    
    