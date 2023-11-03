<script>
</script>

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
                    <form class="ml-10 mb-5">
                        <label for="default-search" class="mb-2 mx-5 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative ">
                            <!-- svg -->
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <!-- search bar -->
                            <input type="search" id="default-search-itinerary" class="w-9/12 block p-2.5 pl-8 pr-12 text-xs text-gray-900 border border-gray-300 rounded-lg bg-grey-200" placeholder = 'Search Experiences!' required>
                            <!-- submit button -->
                            <button type="submit" class="text-white absolute left-2/3 bottom-1.5 bg-neutral-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-[#50A060] font-xsmall rounded-md text-xs px-1 py-1">Search</button>
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
                            <td class="w-50 h-50">
                                <img src="src/assets/bird-paradise-crimson-wetlands.png">
                            </td>
                            <td>
                                <h2 class="font-bold text-3xl">Bird Paradise (current booking)</h2>
                                <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                                <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                                <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                                <a href="review_page_tailwind.html">
                                    <button class= "text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                        View
                                    </button>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="src/assets/homepage background 1.jpg" class="w-50">
                            </td>
                            <td>
                                <h2 class="font-bold text-3xl">Gardens By the Bay</h2>
                                <h2 class="font-bold text-xl">Date: 25/12/23</h2>
                                <h2 class="font-bold text-xl">Time: 2000</h2>
                                <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                                <a href="#">
                                    <button class= "text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                        View
                                    </button>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td class="w-50 h-50">
                                <img src="src/assets/homepage background 2.jpeg">
                            </td>
                            <td>
                                <h2 class="font-bold text-3xl">Bird Paradise</h2>
                                <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                                <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                                <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                                <a href="#">
                                    <button class= "text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                        View
                                    </button>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td class="w-50 h-50">
                                <img src="src/assets/homepage background 3.jpg">
                            </td>
                            <td>
                                <h2 class="font-bold text-3xl">Bird Paradise</h2>
                                <h2 class="font-bold text-xl">Date: 11/11/23</h2>
                                <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
                                <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                                consequuntur fugiat quo accusantium officiis.</p>
                                <a href="#">
                                    <button class= "text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                                        View
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
</style>
    

    