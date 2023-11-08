<template>
<div id="PageContent">
    <div class="flex flex-col flex-1">

        <div class="animate-up">
            <div id="top-header" class="block pt-8 shadow-inner w-full">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                    Streamlining Eco-travel in Singapore</h1>
                <p class="mb-6 text-lg font-bold text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
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
                    <div class="relative z-0 h-80 overflow-hidden w-full rounded-t-xl md:h-96">

                        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg1.jpg" class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl" alt="Gardens By the Bay">
                        </div>

                        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg2.jpeg" class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl" alt="Henderson Waves">
                        </div>

                        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg3.jpg" class="h-64 lg:h-full object-cover relative block w-full shadow-xl" alt="Changi Jewel">
                        </div>

                        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg4.jpg" class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl" alt="Kampung Admirality">
                        </div>

                        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src="../assets/home_bg5.jpg" class="w-full h-64 lg:h-full object-cover relative block w-full shadow-xl" alt="Cycling by Marina Bay">
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="animate-up flex flex-shrink-0 flex-1">
            <div id="featured-listings" style="background-color: bisque;" class="px-6 pt-2 pb-12 w-full h-full">
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

                <div id="PageContent" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center content-center">

                    <itemCardVue v-for="doc of filteredArray" :cardID=doc.ID :cardName=doc.Data.Name :cardImg=doc.Data.images[0] :cardRating=doc.Data.rating :cardRatingImg=doc.Data.rating_img :card-price=doc.Data.Price_level>
                    </itemCardVue>

                </div>

            </div>

        </div>

    </div>

</div>
</template>

<script>
// getElementById("PageContent").style.height = "100%"

import {
    initCarousels,
    initDropdowns
} from 'flowbite'
import itemCardVue from '../components/itemCard.vue'
import {
    getAllDocuments
} from '../db/dbfunctions.js'
import {
    db
} from '../db/FireBaseDB.js'
import {
    searchQuery
} from '../db/localstore'

import { ref } from 'vue'

var allDocs = await getAllDocuments(db)

export default {
    mounted() {
        console.log('hello');
        initCarousels();
        initDropdowns();
        console.log('username');
        // console.log(currentUser.UserName)
        console.log('user_ID')
        // console.log(currentUser.UserID)
        console.log('loc_ID');
        // console.log(currentID.currentID)
        console.log("search query: " + searchQuery.search)
    },
    components: {
        itemCardVue,
    },
    data() {
        console.log("search query: " + searchQuery.search)
        console.log(allDocs)

        function filterfunct(obj){
            const ref = obj.Data.Name.toLowerCase()
            console.log(ref)
            const search = searchQuery.search.toLowerCase()
            console.log(search)
            return ref.includes(search)
        }

        const filteredArray = allDocs.filter(filterfunct)

        console.log("filtered array: " + filteredArray)

        return {
            filteredArray,
            searchQuery
        }

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
