<template>
        <div class="rounded-3xl transition duration-500 ease-in-out scale-90 hover:scale-100 w-64 h-96 max-w-sm bg-white border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 align-bottom">
            <div class="relative">
                <RouterLink :to=cardURL class='flex flex-column' @click="currentID.updateCurrentID(theURL)">
                <img class="h-40 w-full p-2.5 rounded-3xl" :src="cardImg" alt="product image" />
                </RouterLink>
                
                <div class="absolute top-3 right-4">
                    <button @click="togglefav()" class="scale-75 hover:scale-90">
                        <img :id="cardID" src="/src/assets/Favorite_fillwhite@2x.png">
                    </button>
                </div>
            </div>
            

            <div class="p-5 m-5 mx-auto">

                
                <RouterLink :to=cardURL @click="currentID.updateCurrentID(theURL)">
                <h5 class="z-0 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{ cardName }}
                </h5>
                </RouterLink>
                   
                

                <div class="align-bottom pb-0">
                    <div class="flex items-center mt-2.5 mb-5">
                        <img :src="cardRatingImg">
                        <span
                            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            Rating: {{ cardRating }}
                        </span>
                    </div>
                    <div class="flex items-center justify-between bottom-0">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ cardPrice }}</span>

                    <RouterLink :to=cardURL @click="currentID.updateCurrentID(theURL)"
                        class="transition duration-500 ease-in-out bg-green-500 text-white sm:text-black sm:bg-white sm:border sm:border-black hover:border-white hover:bg-green-500 hover:text-white rounded-lg hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center">
                        View
                    </RouterLink>

                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { currentID,currentUser } from '../db/localstore.js'
import { addFavourite,removeFavourite, searchUser } from '../db/dbfunctions';
import { db } from '../db/FireBaseDB';


const props = defineProps(['cardName', 'cardID', 'cardImg', 'cardRating', 'cardRatingImg', 'cardPrice'])

const theURL = ref(props.cardID)
const cardURL = "/listing/" + theURL.value
var fav_state = false
const userID = currentUser.UserID

var current_user_obj = await searchUser(userID,db)

function checkfavs(){
    if(currentUser.UserID != ''){
    const favourites = current_user_obj.Favourites
    if (favourites.includes(props.cardID)){
        document.getElementById(props.cardID).setAttribute('src','/src/assets/Favorite_fill@2x.png')
        fav_state = true
    }
    }
    else{
        console.log('no login')
    }
}

onMounted(checkfavs) 



// var Hearts = [{image1 : "src/assets/Favorite.png"}, {image2 : "src/assets/Favorite_fill.png"}]

function togglefav(){

    const id = props.cardID
    console.log("this card's ID is: " + props.cardID)
    if (currentUser.UserID !== ''){
        if (fav_state){
            document.getElementById(id).setAttribute('src','/src/assets/Favorite_fillwhite@2x.png')
            var result = removeFavourite(db,props.cardID,userID)
            fav_state = false
        }
        else{
            document.getElementById(id).setAttribute('src','/src/assets/Favorite_fill@2x.png')
            var result = addFavourite(db,props.cardID,userID)
            fav_state = true
        }
    }
    else{
        console.log('no user logged in')
    }

}



</script>



<style></style>
