<template>
<tr>
    <td>
        <h2 class="font-bold text-3xl">{{ revTitle }}</h2>
        <h2 class="font-bold text-xl">Date: {{revDate}}</h2>
        <p class="text-lg">{{ revText }}</p>
        <a href="review_page_tailwind.html">
            <span>Review Rating: <img :src="revImg"></span>
        </a>
    </td>
</tr>
</template>

<script setup>
const props = defineProps(['revDate','revRate','revImg','revText','revTitle'])

</script>