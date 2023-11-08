<template>
    <div id="PageContent">
        <div class="flex flex-col flex-1">

            <div class="animate-up">
                <div id="top-header" class="block pt-8 shadow-inner w-full">
                    <div class="typingtext">
                        <div class="typewriter hidden lg:block justify-content-center"> 
                            <h1
                            class="mb-4 p-5 text-3xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white text-center">
                            Streamlining Eco-travel in Singapore
                            </h1>
                        </div> 
                    </div>
                    <!-- <div class="typewriter hidden xl:block justify-content-center"> 
                        <h1
                        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                        Streamlining Eco-travel in Singapore
                        </h1>
                    </div>  -->

                    <div class="lg:hidden"> 
                        <h1
                        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                        Streamlining Eco-travel in Singapore
                        </h1>
                    </div> 
                    
                    
                    <!-- <h1
                        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                        Streamlining Eco-travel in Singapore</h1> -->
                    <p
                        class="mb-6 text-lg font-bold text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
                        At
                        <span class="text-green-500 font-bold dark:text-green-500">Greengoing</span>, We're Dedicated to
                        Singapore's
                        Sustainable
                        Travels!
                    </p>
                </div>
            </div>


            <div class="animate-up flex flex-shrink-0 h-80 md:h-96">
                <div id="user-input-area" class="w-full h-auto">
                    <div id="homepage-carousel" class="z-0 w-full content-center" data-carousel="slide">
                        <div class="relative z-0 h-80 overflow-hidden w-full rounded-t-2xl md:h-96">

                            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                                <img src="../assets/home_bg1.jpg"
                                    class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl"
                                    alt="Gardens By the Bay">
                            </div>

                            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                                <img src="../assets/home_bg2.jpeg"
                                    class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl"
                                    alt="Henderson Waves">
                            </div>

                            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                                <img src="../assets/home_bg3.jpg"
                                    class="h-64 lg:h-full object-cover relative block w-full shadow-xl" alt="Changi Jewel">
                            </div>

                            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                                <img src="../assets/home_bg4.jpg"
                                    class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl"
                                    alt="Kampung Admirality">
                            </div>

                            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                                <img src="../assets/fav_background.jpg"
                                    class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl"
                                    alt="Cycling by Marina Bay">
                            </div>
                        </div>
                    </div>

                    <!-- <div id="user-input-box"
                        class=" absolute grid grid-rows-3 h-screen rounded-xl z-1 p-1 drop-shadow-md inset-x-0 top-16 w-2/3 md:w-1/3">

                        <div id="traveller-date-input" class="grid place-items-center row-start-1 grid-cols-4">

                            <div id="daterange-input" date-rangepicker class="flex place-items-center col-span-4">
                                <div class="relative" id="input-start-date">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-emerald-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input datepicker data-date-format="dd/mm/yyyy" datepicker-autohide name="start"
                                        type="text"
                                        class="bg-gray-50 border border-gray-300 text-emerald-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-[4000ms] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Start Date">
                                </div>

                                <span class="hidden md:block mx-4 text-gray-500">to</span>

                                <div class="relative" id="input-end-date">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-emerald-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input datepicker data-date-format="dd/mm/yyyy" datepicker-autohide name="end"
                                        type="text"
                                        class="bg-gray-50 border border-gray-300 text-emerald-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-[4000ms] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="End Date">
                                </div>
                            </div>

                        </div>

                        <div id="travellers-pax-input" class="grid place-items-center row-start-2 grid-cols-6">
                            <div class="col-span-2">
                            </div>
                            <input type="number" id="visitors" min="1" max="12"
                                class="bg-gray-50 border border-gray-300 text-emerald-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-[4000ms] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2 w-full"
                                placeholder="Travellers" required>
                            <div class="col-span-2">
                            </div>
                        </div>

                        <div id="book-button" class="grid row-start-3 grid-cols-6 ">

                            <div class="col-span-1">
                            </div>

                            <button type="button"
                                class="col-span-3 w-3/4 text-black m-auto place-items-center bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm p-2.5 md:p-1 col-span-6 ">
                                <p class="text-xs md:text-base">Explore Now!</p>
                            </button>

                            <div class="col-span-1">
                            </div>
                        </div>

                    </div> -->
                </div>

            </div>

            <div class="animate-up flex flex-shrink-0 flex-1">
                <div id="featured-listings" style="background-color: bisque;" class="px-6 pt-2 pb-12 w-full h-full">

                    <div id="header-featured-listings" class="px-6 my-5">
                        <h1
                            class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-emerald-600 md:text-5xl lg:text-6xl dark:text-white">
                            Attractions People</h1>
                        <h1
                            class="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            <mark class="px-4 font-bold text-white bg-emerald-600 rounded dark:bg-green-500">LOVE</mark>
                        </h1>
                        <p class="font-bold text-lg text-gray-500 lg:text-xl dark:text-gray-400 text-center">Life is all
                            about
                            trying
                            new experiences!</p>
                    </div>

                    <div id="PageContent"
                        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center content-center">

                        <itemCardVue v-for="doc of allDocs" :cardID=doc.ID :cardName=doc.Data.Name
                            :cardImg=doc.Data.images[0] :cardRating=doc.Data.rating :cardRatingImg=doc.Data.rating_img
                            :card-price=doc.Data.Price_level>
                        </itemCardVue>
                    </div>

                </div>

            </div>

        </div>
        <!-- Test -->
        <!-- <div class="wrapper"> 
        <div class="typewriter text-black"> 
            <h1>Hello Geeks of GeeksforGeeks</h1> 
        </div> 
        </div>  -->
    </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import itemCardVue from '../components/itemCard.vue'
import { getAllDocuments } from '../db/dbfunctions.js'
import { db } from '../db/FireBaseDB.js'
import { currentUser,currentID} from '../db/localstore'
import { ref, watch } from 'vue'



var allDocs = await getAllDocuments(db)

// Test
var index = 0; 
var text = 'Streamlining Eco-travel in Singapore'; 
var speed = 50; 
  
// function textEffect() { 
//     if (index < text.length) { 
//         document.getElementById("effect") 
//                 .innerHTML += text.charAt(index); 
//         index++; 
//         setTimeout(textEffect, speed); 
//     } 
// }

export default {
    mounted() {
        console.log('hello');
        initFlowbite();
        console.log('username');    
        console.log(currentUser.UserName)
        console.log('user_ID')
        console.log(currentUser.UserID)
        console.log('loc_ID');
        console.log(currentID.currentID)

    },
    components: { itemCardVue },
    data() {
        return {
            allDocs,
            
        }
    },
   
    
}

</script>

<style>

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

@keyframes typing { 
  from { 
        
      width: 0;
      margin: 300px;
  } 
  to { 
      width: 100%
  } 
}

.typewriter h1 { 

    overflow: hidden; 

  /* Keeps the content on a single line */
    white-space: nowrap; 

  /* Gives that scrolling effect  
     as the typing happens */
  /* margin: 0 auto;  */

  /* Typing Effect Animation */
    animation: typing 2.5s steps(50, end) 
} 
.typingtext { 
  
  /* Keeping the Text in the  
     center of the Screen */
  display: flex; 
  justify-content: center; 
  padding: 5px;
} 

</style>
