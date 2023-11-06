<!-- 

<script>
import {
    initFlowbite
} from 'flowbite'
export default {
    mounted() {
        console.log('hello');
        initFlowbite();
    }
}
</script> -->

<template>
<div id="PageContent" class="bg-gradient-to-b from-[bisque] to-[#A6CEAE]">

    <div id="itinerary-content">

        <div class="py-5 relative inline-flex items-center overflow-hidden">
            <img class="w-full h:auto opacity-50 rounded-r-2xl" src="src/assets/orchid.png">
            <h1 class="absolute left-8 xl:bottom-80 top-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Your Itinerary</h1>
            <h1 class="absolute left-8 top-30 ml-2 text-3xl font-semibold text-white">Your recent bookings towards a healthier, greener city.</h1>

            <!-- itinerary search -->
            <div id="itinerary-search" class="container justify-center absolute left-0 mt-40 md:mt-45 lg:mt-40 xl:mt-40">

                <!-- </form> -->
                <form class="ml-10 mb-5 w-1/3">
                    <label for="default-search" class="mb-2 mx-5 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <!-- svg -->
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <!-- search bar -->
                        <input type="search" id="default-search-itinerary" class="w-full block p-2.5 pl-8 pr-12 text-xs text-gray-900 border border-gray-300 rounded-lg bg-grey-200" placeholder='Search Your Bookings!' required>
                        <!-- submit button -->
                        <button type="submit" onclick="showFilteredResults()" class="text-white absolute right-1 bottom-1.5 bg-neutral-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-[#50A060] font-xsmall rounded-md text-xs px-1 py-1">Search</button>
                    </div>
                </form>

            </div>

        </div>

        <!-- Your Bookings and Past Bookings tabs -->
        <div class="mb-4 border-b border-gray-200">
            <ul class="flex flex-wrap -mb-px text-sm sm:text-md md:text-md font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="yourbookings-tab" data-tabs-target="#yourbookings" type="button" role="tab" aria-controls="yourbookings" aria-selected="false">Your Bookings</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="pastbookings-tab" data-tabs-target="#pastbookings" type="button" role="tab" aria-controls="pastbookings" aria-selected="false">Past Bookings</button>
                </li>
            </ul>
        </div>

        <div id="tab-content">
            <!-- Your Bookings content -->
            <div class="hidden p-4 rounded-lg bg-gray-50" id="yourbookings" role="tabpanel" aria-labelledby="yourbookings-tab">
                <table id="ItineraryListings" class="justify-center items-center">
                    <tr>
                        <td>
                            <img src="src/assets/bird-paradise-crimson-wetlands.png" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Bird Paradise (current booking)</h2>
                            <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                            <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="review_page_tailwind.html">
                                <button class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                    View
                                </button>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="src/assets/home_bg1.jpg" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Gardens By the Bay</h2>
                            <h2 class="font-bold text-xl">Date: 25/12/23</h2>
                            <h2 class="font-bold text-xl">Time: 2000</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="#">
                                <button class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                    View
                                </button>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-50 h-50">
                            <img src="src/assets/home_bg2.jpeg" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Bird Paradise</h2>
                            <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                            <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="#">
                                <button class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                    View
                                </button>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-50 h-50">
                            <img src="src/assets/home_bg3.jpg" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Bird Paradise</h2>
                            <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                            <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="#">
                                <button class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                    View
                                </button>
                            </a>
                        </td>
                    </tr>

                </table>
            </div>

            <!-- Past booking content -->
            <div class="hidden p-4 rounded-lg bg-gray-50" id="pastbookings" role="tabpanel" aria-labelledby="pastbookings-tab">
                <div id="review-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-md max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="review-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Leave a review!</h3>
                                <form class="space-y-6" action="/">
                                    <!-- idk how to get this to WORK HAIZ-->
                                    <div>
                                        <label for="review_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review Title</label>
                                        <input type="text" name="review_title" id="review_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Review Title" required>
                                    </div>
                                    <div>
                                        <label for="review_text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review Text</label>
                                        <input type="text" name="review_text" id="review_text" placeholder="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full h-40 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                    </div>

                                    <button type="submit" @click="addReview(db,thisID,the_review_obj)" class="w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit your Review</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table id="ItineraryListings" class="justify-center items-center">
                    <tr>
                        <td>
                            <img src="src/assets/bird-paradise-crimson-wetlands.png" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Bird Paradise (past booking)</h2>
                            <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                            <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="#">
                                <button data-modal-target="review-modal" data-modal-toggle="review-modal" class="block text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" type="button">
                                    Leave a review
                                </button>

                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="src/assets/home_bg1.jpg" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Gardens By the Bay</h2>
                            <h2 class="font-bold text-xl">Date: 25/12/23</h2>
                            <h2 class="font-bold text-xl">Time: 2000</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="#">
                                <button data-modal-target="review-modal" data-modal-toggle="review-modal" class="block text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" type="button">
                                    Leave a review
                                </button>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-50 h-50">
                            <img src="src/assets/home_bg2.jpeg" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Bird Paradise</h2>
                            <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                            <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="#">
                                <button data-modal-target="review-modal" data-modal-toggle="review-modal" class="block text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" type="button">
                                    Leave a review
                                </button>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-50 h-50">
                            <img src="src/assets/home_bg3.jpg" class="w-50 h-50">
                        </td>
                        <td>
                            <h2 class="font-bold text-3xl">Bird Paradise</h2>
                            <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                            <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                            <a href="#">
                                <button data-modal-target="review-modal" data-modal-toggle="review-modal" class="block text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" type="button">
                                    Leave a review
                                </button>
                            </a>
                        </td>
                    </tr>

                </table>

            </div>

        </div>
    </div>
</div>
</template>

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

<script>
    
    import { initFlowbite } from 'flowbite'
    export default{
    mounted(){
        // console.log('hello');
        initFlowbite();
        }
    }
    
    // figure out how to import db
    function showFilteredResults(){
        var searchInput = document.getElementById('default-search-itinerary')
        console.log('===START===')
        // for listing in listings
        // results = smth.filter(searchInput)
        string = ``
        // return string
    }
</script>
