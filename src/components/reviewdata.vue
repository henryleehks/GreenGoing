<template>
<tr>
    <td>
        <img :src="revImg" class="w-50 h-50">
    </td>
    <td>
        <h2 class="font-bold text-3xl">{{ revTitle }}</h2>
        <h2 class="font-bold text-xl">Date: {{revDate}}</h2>
        <p class="text-lg">{{ revText }}</p>
        <a href="review_page_tailwind.html">
            <button class="text-white bg-[#50A060] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md md:text-md px-5 py-2.5 mt-8 text-center">
                View
            </button>
        </a>
    </td>
</tr>
</template>

<script setup>
const props = defineProps(['revDate','revRate','revImg','revText','revTitle'])

</script>