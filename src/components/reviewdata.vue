<template>
<tr>
    <td>
        <h2 class="font-bold text-2xl">{{ revTitle }}</h2>
        <h2 class="font-bold text-emerald-600 text-xl">Date: {{revDate}}</h2>
        <p class="text-lg">{{ revText }}</p>
        <p><span>Review Rating: </span><span><img class='inline' :src="revImg"></span></p>
    </td>
</tr>
</template>

<script setup>
const props = defineProps(['revDate','revRate','revImg','revText','revTitle'])

</script>