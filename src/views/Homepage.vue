<script>
</script>

<template>
<div onload="floatin()">
    <div class="flex flex-col flex-1">

        <div>
            <div id="top-header" class="block pt-8 shadow-inner w-full">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                    Streamlining Eco-travel in Singapore</h1>
                <p class="mb-6 text-lg font-bold text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
                    At
                    <span class="text-green-500 font-bold dark:text-green-500">Greengoing</span>, We're Dedicated to Singapore's
                    Sustainable
                    Travels!
                </p>
            </div>
        </div>

        <div class="flex flex-shrink-0 h-80 md:h-96">
            <div id="user-input-area" class="w-full h-auto md:h-auto">
                <div id="homepage-carousel" class=" z-0 w-full content-center " data-carousel="slide">
                    <div class="relative z-0 h-80 overflow-hidden w-full rounded-t-xl md:h-96">

                        <div class="hidden duration-[4000ms] ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg1.jpg" class=" object-fill relative block w-full shadow-xl" alt="Gardens By the Bay">
                        </div>

                        <div class="hidden duration-[4000ms] ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg2.jpeg" class="object-fill relative block w-full shadow-xl" alt="Henderson Waves">
                        </div>

                        <div class="hidden duration-[4000ms] ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg3.jpg" class="object-fill relative block w-full shadow-xl" alt="Changi Jewel">
                        </div>

                        <div class="hidden duration-[4000ms] ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg4.jpg" class=" object-fill relative block w-full shadow-xl" alt="Kampung Admirality">
                        </div>

                        <div class="hidden duration-[4000ms] ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg5.jpg" class=" object-fill relative block w-full shadow-xl" alt="Cycling by Marina Bay">
                        </div>
                    </div>
                </div>

                <div id="user-input-box" class=" absolute grid grid-rows-3 h-screen rounded-xl z-1 p-1 drop-shadow-md inset-x-0 top-16 w-2/3 md:w-1/3">

                    <div id="traveller-date-input" class="grid place-items-center row-start-1 grid-cols-4">

                        <div id="daterange-input" date-rangepicker class="flex place-items-center col-span-4">
                            <div class="relative" id="input-start-date">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-emerald-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input datepicker data-date-format="dd/mm/yyyy" datepicker-autohide name="start" type="text" class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-[4000ms] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start Date">
                            </div>

                            <span class="hidden md:block mx-4 text-gray-500">to</span>

                            <div class="relative" id="input-end-date">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-emerald-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input datepicker data-date-format="dd/mm/yyyy" datepicker-autohide name="end" type="text" class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-[4000ms] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="End Date">
                            </div>
                        </div>

                    </div>

                    <div id="travellers-pax-input" class="grid place-items-center row-start-2 grid-cols-6">
                        <div class="col-span-2">
                        </div>
                        <input type="number" id="visitors" min="1" max="12" class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-[4000ms] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2 w-full" placeholder="Travellers" required>
                        <div class="col-span-2">
                        </div>
                    </div>

                    <div id="book-button" class="grid row-start-3 grid-cols-6 ">

                        <div class="col-span-1">
                        </div>

                        <button type="button" class="col-span-3 w-3/4 text-black m-auto place-items-center bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm p-2.5 md:p-1 col-span-6 ">
                            <p class="text-xs md:text-base">Explore Now!</p>
                        </button>

                        <div class="col-span-1">
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="flex flex-shrink-0 flex-1">
            <div id="featured-listings" style="background-color: bisque;" class="px-6 pt-2 pb-12 pb-24 w-full h-full">

                <div id="header-featured-listings" class="px-6 my-5">
                    <h1 class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Attractions People</h1>
                    <h1 class="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        <mark class="px-4 font-bold text-white bg-green-600 rounded dark:bg-green-500">LOVE</mark>
                    </h1>
                    <p class="font-bold text-lg text-gray-500 lg:text-xl dark:text-gray-400 text-center">Life is all
                        about
                        trying
                        new experiences!</p>
                </div>

                <div id="PageContent" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center content-center">

                    <div id="item-1-card" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-[4000ms]">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="Justin checkout\img\a.jpg" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Wild Wild Wet
                                </h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/grey_tree.png">
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$30</span>
                                <a href="#" class="text-white bg-blue-[4000ms] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-[4000ms] dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                    </div>

                    <div id="item-2-card" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-[4000ms]">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="Justin checkout\img\b.png" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Birds'
                                    Paradise</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/grey_tree.png">
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$60</span>
                                <a href="#" class="text-white bg-blue-[4000ms] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-[4000ms] dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                    </div>

                    <div id="item-3-card" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-[4000ms]">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="Justin checkout\img\c.jpg" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Gardens
                                    By
                                    the Bay</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/grey_tree.png">
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$52</span>
                                <a href="#" class="text-white bg-blue-[4000ms] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-[4000ms] dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                    </div>

                    <div id="item-4-card" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-[4000ms]">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="Justin checkout\img\d.jpg" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Changi
                                    Airport, Jewel</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/color_tree.png">
                                <img class="w-4 h-4" src="../assets/grey_tree.png">
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$10</span>
                                <a href="#" class="text-white bg-blue-[4000ms] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-[4000ms] dark:focus:ring-blue-800">View</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</div>
</template>

<script>
// import {scripts} from './externalJs.js'
// console.log(scripts[0])
// import {router} from '../router/index.js'
import { initCarousels, initDropdowns } from 'flowbite'

function floatin() {
    require('tailwind')
    console.log("float-in() start")

}
export default{
    mounted(){
        console.log('hello');
        initCarousels();
        initDropdowns();
    }
}
</script>

<style>
#topnavbar {
    background-color: #CFCAC2;
}

#banner-logo {
    width: 75%;
    display: block;
    margin: 20px;
}

#default-search {
    background-color: #CFCAC2;
    width: 200%;
}

#default-search-mobile {
    background-color: #CFCAC2;
    width: 100%;
}

#SearchButton {
    position: absolute;
}

/* Center the user-input-box to the image */
#user-input-area {
    position: relative;
    padding-bottom: 500px;
    width: 100%;
}

#user-input-box {
    height: 145px;
    margin: auto;
    background-color: rgb(207, 202, 194, 0.9);
}
</style>
