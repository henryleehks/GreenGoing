<template>
    <tr>
        <td class="object-center">
            <img :src="rowImg" class="w-90 h-80">
        </td>
        <td>
            <h2 class="font-bold text-3xl md:text-xl sm:text-xl">
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
            <RouterLink :to= rowURL class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                View
            </RouterLink>
        </td>
    </tr>
    
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const props = defineProps(['rowName','rowID','rowImg','rowDescript', 'rowRating','rowRatingImg'])

const theURL = ref(props.cardID)
const rowURL = "/listing/" + theURL.value

</script>