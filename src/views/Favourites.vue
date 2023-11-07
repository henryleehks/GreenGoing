<template>
    <div id="PageContent">

        <div id="itinerary-content" class="animate-up">

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

        <div id="featured-listings" class="animate-up px-6 pt-2 pb-12 mb-24 w-full bg-gradient-to-b from-[bisque] to-[#A6CEAE]">

            <div id="header-featured-listings" class="px-6 my-5">

                <h1
                    class="text-center mb-8 text-5xl font-extrabold leading-none tracking-tight text-emerald-600 md:text-5xl lg:text-6xl">Your Journey
                </h1>
                <h1
                    class="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    <mark class="px-6 text-white font-bold bg-emerald-600 rounded dark:bg-green-500">Awaits</mark>
                </h1>
                <p class="font-bold text-lg text-gray-500 lg:text-xl dark:text-gray-400 text-center">
                    Book your next eco-trip to Singapore now!
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center content-center">

                <div id="item1"
                    class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover"
                    style="width: 100%;">
                    <a href="#">
                        <img class="rounded-xl object-cover" src="img/a.jpg" alt="product image" />
                    </a>

                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Wild Wild
                                Ticket
                            </h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/grey_tree.png">
                            <span
                                class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 light:text-black">$10</span>
                            &nbsp
                            <a href="protoreview.html"
                                v-on:click="sendoverrev(1, 'img/a.jpg', 'Wild Wild Ticket', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">
                                <button
                                    class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                    v-on:click="sendoverrev(1, 'img/a.jpg', 'Wild Wild Ticket', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">View
                                    More</button>
                            </a>
                            &nbsp
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="addToCart(1, 'Wild Wild Ticket', 10.00, 'img/a.jpg', 'Adult')">Add Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Item 2 card -->
                <div id="item2"
                    class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover"
                    style="width: 100%;">
                    <a href="#">
                        <img class="rounded-xl object-cover" src="img/b.png" alt="product image" />
                    </a>

                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Bird Paradise
                            </h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/grey_tree.png">
                            <img class="w-4 h-4" src="img/grey_tree.png">
                            <span
                                class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">3.0</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 light:text-black">$20</span>
                            &nbsp
                            <a href="protoreview.html"
                                v-on:click="sendoverrev(2, 'img/b.png', 'Bird Paradise', 'My House', 5, 'NIL') ; ">
                                <button
                                    class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                    onclick="sendoverrev(2,'img/b.png','Bird Paradise','My House',5,'NIL') ; ">View
                                    More</button>
                            </a>
                            &nbsp
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="addToCart(2, 'Bird Paradise', 20.00, 'img/b.png', 'Adult')">Add Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Item 3 card -->
                <div id="item3"
                    class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover"
                    style="width: 100%;">
                    <a href="#">
                        <img class="rounded-xl object-cover" src="img/c.jpg" alt="product image" />
                    </a>

                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Gardens Nina
                                Buay
                            </h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <span
                                class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 light:text-black">$50</span>
                            &nbsp
                            <a href="protoreview.html"
                                v-on:click="sendoverrev(3, 'img/c.jpg', 'Gardens Nina Buay', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">
                                <button
                                    class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                    v-on:click="sendoverrev(3, 'img/c.jpg', 'Gardens Nina Buay', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">View
                                    More</button>
                            </a>
                            &nbsp
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="addToCart(3, 'Gardens Nina Buay', 50.00, 'img/c.jpg', 'Adult')">Add
                                Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Item 4 card -->
                <div id="item4"
                    class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover">
                    <a href="#">
                        <img class="rounded-xl object-cover" src="img/d.jpg" alt="product image" />
                    </a>

                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Changi Jewel
                                Tour
                            </h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/color_tree.png">
                            <img class="w-4 h-4" src="img/grey_tree.png">
                            <span
                                class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 light:text-black">$90</span>
                            &nbsp
                            <a href="protoreview.html"
                                v-on:click="sendoverrev(4, 'img/d.jpg', 'Changi Jewel Tour', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">
                                <button
                                    class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                    v-on:click="sendoverrev(4, 'img/d.jpg', 'Changi Jewel Tour', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">View
                                    More</button>
                            </a>
                            &nbsp
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="addToCart(4, 'Changi Jewel Tour', 90.00, 'img/d.jpg', 'Adult')">Add
                                Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { initFlowbite } from 'flowbite';
export default {
    mounted() {
        initFlowbite()
    }
}
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