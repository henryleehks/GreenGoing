<template>
    <tr class="w-full">
        <td class="flex object-center p-4 w-2/3 h-auto">
            <img :src="rowImg" class="w-auto h-auto">
        </td>
        <td class="w-1/3">
            <h2 class="font-bold text-xl md:text-5xl sm:text-3xl">
                {{ rowName }}
            </h2>
            <!-- <h2 class="font-bold text-xl">Date: 11/11/23</h2> -->
            <!-- <h2 class="font-bold text-xl">Time: 1300 - 1900</h2> -->
            <div class="flex items-center mt-2.5 mb-5">
                <img :src="rowRatingImg">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        {{ rowRating }}
                    </span>
            </div>
            <RouterLink @click="currentID.updateCurrentID(theURL)" :to= rowURL class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
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