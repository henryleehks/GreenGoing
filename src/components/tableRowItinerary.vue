<template>
    <tr class="w-full h-full">
        <td class="flex object-center p-2 sm:p-5 md:p-10 my-auto w-full h-full">
            <img :src="rowImg" class=" object-fill w-auto h-auto">
        </td>
        <td class="w-1/3">
            <h2 class="ml-1 font-bold text-lg lg:text-5xl sm:text-2xl">
                {{ rowName }}
            </h2>
            <!-- <h2 class="font-bold text-xl">Date: 11/11/23</h2> -->
            <!-- <h2 class="font-bold text-xl">Time: 1300 - 1900</h2> -->
            <p class="mt-4 ml-2">Reviews:</p>
            <div class="grid mb-8 grid-cols-4 ml-0">
                <img :src="rowRatingImg" class="col-span-4 sm:col-span-3">
                    <span class="col-span-1 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 text-center rounded dark:bg-blue-200 dark:text-blue-800 ">
                        {{ rowRating }}
                    </span>
            </div>
            <RouterLink @click="currentID.updateCurrentID(theURL)" :to= rowURL class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-2 md:px-5 py-1.5 md:py-2.5 mt-8 text-center">
                View
            </RouterLink>
        </td>
    </tr>
    
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { currentID } from '../db/localstore.js'



const props = defineProps(['rowName','rowID','rowImg','rowDescript', 'rowRating','rowRatingImg'])

const theURL = ref(props.rowID)
const rowURL = "/listing/" + theURL.value



</script>
