<template>
<tr>
    <td>
        <h2 class="font-bold text-2xl">{{ revTitle }}</h2>
        <h2 class="font-bold text-xl">Date: {{revDate}}</h2>
        <p class="text-lg">{{ revText }}</p>
        <span>Review Rating: <img :src="revImg"></span>
    </td>
</tr>
</template>

<script setup>
const props = defineProps(['revDate','revRate','revImg','revText','revTitle'])

</script>