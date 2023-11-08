<template>
<div id="PageContent" class="">

    <div id="itinerary-content" class="grid grid-cols-2 sm:grid-cols-6 gap-1">

        <div class="col-span-6 relative inline-flex items-center overflow-hidden">
            <div class="relative h-full w-full">
                <img class="w-full h-auto" src="src/assets/orchid.png" alt="Orchid">                    
                    <div id="headings" class="absolute top-1/3 left-4">
                        <h1 class="font-extrabold leading-none tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl left-4">
                            Your Itinerary
                        </h1>
                        <h1 class="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white  left-4 ">
                            Your recent bookings towards a healthier, greener city.
                        </h1>
                    </div>
                </div>

        </div>

        <!-- Your Bookings and Past Bookings tabs -->
        <div class="col-span-6 mb-4 border-b border-gray-200">
            <ul class="flex flex-wrap justify-center text-sm sm:text-md md:text-md font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="yourbookings-tab" data-tabs-target="#yourbookings" type="button" role="tab" aria-controls="yourbookings" aria-selected="false">Current Bookings</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="pastbookings-tab" data-tabs-target="#pastbookings" type="button" role="tab" aria-controls="pastbookings" aria-selected="false">Past Bookings</button>
                </li>
            </ul>
        </div>

        <div id="tab-content" class="col-span-6 ">
            <!-- Your Bookings content -->
            <div class="hidden p-5 rounded-lg bg-green-500" id="yourbookings" role="tabpanel" aria-labelledby="yourbookings-tab">
                <table id="ItineraryListings" class="justify-center items-center">
                        <tableRowItinerary v-for="doc of allDocs" :rowID=doc.ID :rowName=doc.Data.Name :rowImg=doc.Data.images[0] :rowDescript=doc.Description :rowRating=doc.Data.rating :rowRatingImg=doc.Data.rating_img>
                        </tableRowItinerary>
                </table>
            </div>

            <!-- Past booking content -->
            <div class="hidden p-5 rounded-lg bg-gray-300" id="pastbookings" role="tabpanel" aria-labelledby="pastbookings-tab">
                <table id="ItineraryListings" class="justify-center items-center">
                    <tableRowItinerary v-for="doc of allDocs" :rowID=doc.ID :rowName=doc.Data.Name :rowImg=doc.Data.images[0] :rowDescript=doc.Description :rowRating=doc.Data.rating :rowRatingImg=doc.Data.rating_img>
                    </tableRowItinerary>
                </table>
            </div>

        </div>


    </div>
</div>
</template>

<script>
import tableRowItinerary from '../components/tableRowItinerary.vue'
import {
    getAllDocuments
} from '../db/dbfunctions.js'
import {
    SearchAllDocuments
} from '../db/dbfunctions.js'
import {
    db
} from '../db/FireBaseDB.js'
import {
    initFlowbite
} from 'flowbite'

const allDocs = await getAllDocuments(db)
var searchInput = document.getElementById('default-search-itinerary')
var results = SearchAllDocuments(allDocs, searchInput)

export default {
    mounted() {
        console.log('hello');
        initFlowbite();

    },
    components: {
        tableRowItinerary
    },
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


@media (min-width: 1024px) {
    #tab-content {
        
        max-width: 1100px; 
        margin: 0 auto; 
    }

    td.flex {
        padding: 1rem; 
    }

    img.object-fill {
        max-width: 100%; 
        height: auto; 
    }
}
</style>
