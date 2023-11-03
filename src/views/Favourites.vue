<template>
    <div id="PageContent" class="w-full h-auto top-0 bg-[bisque]">

        <div id="itinerary-content">

            <div class="relative inline-flex items-center overflow-hidden">
                <img class="w-full h:auto opacity-50 rounded-r-2xl" src="src/assets/favpagebackground.png">
                <h1 class="absolute left-8 xl:bottom-80 top-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Your Favorites</h1>
                <h1 class="absolute left-8 top-30 ml-2 text-3xl font-semibold text-white">Begin your journey towards sustainability.</h1>
  
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

        </div>

        <!-- Favourites as Cards -->

        <div id="featured-listings" class="px-6 pt-2 pb-12 mb-24 w-full bg-gradient-to-b from-[bisque] to-[#A6CEAE]">

            <div id="header-featured-listings" class="px-6 my-5">
  
                <h1
                class="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark class="px-4 text-white font-bold bg-green-600 rounded dark:bg-green-500">Your Journey Awaits</mark>
                </h1>
                <p class="font-bold text-lg text-gray-500 lg:text-xl dark:text-gray-400 text-center">
                Book your next eco-trip to Singapore now!
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center content-center">

                <!-- item 1 card -->
                <div id="item-1-card"
                    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="Justin checkout\img\a.jpg" alt="product image" />
                    </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Wild Wild Wet</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assestscolor_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/grey_tree.png">
                                <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$30</span>
                                <a href="#"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                </div>
            
                <!-- Item 2 card -->
                <div id="item-2-card"
                    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="Justin checkout\img\a.jpg" alt="product image" />
                    </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Wild Wild Wet</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$30</span>
                                <a href="#"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                </div>

                <!-- Item 3 card -->
                <div id="item-3-card"
                    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="Justin checkout\img\a.jpg" alt="product image" />
                    </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Wild Wild Wet</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$30</span>
                                <a href="#"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                </div>

                <!-- Item 4 card -->
                <div id="item-4-card"
                    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="Justin checkout\img\a.jpg" alt="product image" />
                    </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Wild Wild Wet</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <img class="w-4 h-4" src="src/assets/color_tree.png">
                                <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$30</span>
                                <a href="#"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                </div>
        
            </div>
        </div>
    </div>

</template>