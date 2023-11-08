<template>
<div>
    <!-- Your body content -->
    <section class="w-full h-1/2 bg-center bg-thisbg bg-cover bg-no-repeat">
        <div class="sticky z-0 h-full w-full">
            <img :src="this_img" class="absolute object-cover w-full h-full z-0">
            <div class="sticky top-1/2 px-4 mx-auto max-w-screen-xl text-center">
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <RouterLink to="/" class=" relative inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900">
                        Home
                    </RouterLink>
                    <RouterLink to="/" class=" relative inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Check Out
                    </RouterLink>
                </div>
                <svg class="relative animate-bounce mt-4" width="100%" height="100%">
                    <image x="25%" y="25%" width="50%" height="50%" xlink:href="../assets/down-arrow.png" />
                </svg>
            </div>
        </div>

    </section>

            <div class=" mt-4 mb-4 border-b border-gray-200">
                <h1 class="font-bold text-3xl p-3">{{ info.Name }}</h1>
                <h1 class="p-3 justify-start">{{ info.Description }}</h1>
                
                <div class="container lg:grid  md:grid-cols-2 lg:grid-cols-2 lg:gap-4">
                    <div class="lg:col-span-1">
                    <ul>
                        <li class="text-start mb-3"><p class="text-lg p-1 font-bold text-gray-600" style="color:black;">Address:</p> {{ info.Address }}</li>
                        <li class="text-start"><span class="text-lg p-1 font-bold text-gray-600 " style="color: black;">Price Level:</span> {{ info.Price_level }}</li>
                    </ul>
                    </div>
    
                    <div class="lg:col-span-1 flex justify-end"> 
                        <button class="bg-blue-500 px-4 m-5 py-2 rounded-lg">
                        <a :href="info.WebUrl" class="text-md text-slate-50">
                            Link to Tripadvisor
                        </a>
                        </button>
                    </div>
                </div>
    
                <div class="flex flex-col md:flex-row md:items-center">
                    <div class="md:w-1/2"> 
                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 -mb-px text-sm sm:text-md md:text-md font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="tripadvisor-tab" data-tabs-target="#tripadvisorbookings" type="button" role="tab" aria-controls="yourbookings" aria-selected="false">Tripadvisor Reviews</button>
                            </li>
                            <li role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="greengoing-tab" data-tabs-target="#greengoingbookings" type="button" role="tab" aria-controls="pastbookings" aria-selected="false">Greengoing Reviews</button>
                            </li>
                        </ul>
                    </div>
                    <div class="md:ml-auto md:mt-4"> 
                        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block w-full md:w-80 mr-10 md:inline-block text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" type="button">
                            Leave a Review!
                        </button>
                    </div>
            </div>
        </div>


<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Leave a review!</h3>
                <form class="space-y-6"> 
                    <div>
                        <label for="review_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review Title</label>
                        <input type="text" name="review_title" id="review_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Review Title" 
                        v-model="the_title" required>
                    </div>
                    <div>
                        <label for="review_text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review Text</label>
                        <input type="text" name="review_text" id="review_text" placeholder="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full h-40 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required v-model="the_text">
                    </div>
                    <div>
                        <label for="review_rating" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="number" name="review_rating" id="review_rating" max="5" min="1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required v-model="the_rating" >
                    </div>

                    <button type="submit" data-modal-hide="authentication-modal" @click="addReview(db,thisID,the_text,the_rating,the_title,currentUser.UserName); router.push('/')" class="w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit your Review</button>
                </form>
            </div>
        </div>
    </div>
</div> 

    <div id="tab-content">
        <!-- tripadvisor content -->
        <div class="hidden p-4 rounded-lg bg-gray-300 pb-20" id="tripadvisorbookings" role="tabpanel" aria-labelledby="tripadvisor-tab">
            <table id="ItineraryListings" class="justify-center items-center">
                        <reviewdata
                        v-for="review in this_reviews"
                        :revDate="review.date"
                        :revRate="review.rating"
                        :revImg="review.ratingImg"
                        :revText="review.text"
                        :revTitle="review.title"
                        >    
                        </reviewdata>
            </table>
        </div>
        <!-- Greengoing content -->
        <div class="hidden p-4 rounded-lg bg-gray-300 pb-20" id="greengoingbookings" role="tabpanel" aria-labelledby="greengoing-tab">
            <table id="ItineraryListings" class="justify-center items-center">
            <ggreview
            v-for="review in this_ggreviews"
            :revName="review.Name"
            :revRate="review.Rating"
            :revText="review.Text"
            :revTitle="review.Title"
            >
            </ggreview>
            </table>
        </div>
    </div>

</div>
</template>

<script setup>
import {initFlowbite} from 'flowbite';
import {currentID,currentUser} from '../db/localstore.js';
import {getDocument,addGGReview} from '../db/dbfunctions';
import {db} from '../db/FireBaseDB';
import { onMounted,ref, defineModel } from 'vue';
import ggreview from '../components/GGreview.vue'
import reviewdata from '../components/reviewdata.vue'
import { RouterLink } from 'vue-router';
import router from '../router'

onMounted(initFlowbite)

console.log(currentID.currentID)

function onsubmit(e){
    e.preventDefault()
}


async function addReview(db,id,text,rating,title,user){
    const the_review_obj = {
        rev_username: user,
        rev_title: title,
        rev_text: text,
        rev_rating: rating
    }
    console.log('start')
    console.log(id)
    console.log(db)
    console.log(the_review_obj)
    addGGReview(db,id,the_review_obj)   
    console.log('end')
}


const thisID = currentID.currentID
const info = await getDocument(thisID, db)
console.log("hello this is: " + thisID)
console.log(info)
const this_reviews = info.reviews
const this_ggreviews = info.GGReviews
const this_img = info.images[0]

const the_text = ref('')
const the_rating = ref('')
const the_title = ref('')





</script>
