<template>
<tr>
    <td>
        <h2 class="font-bold text-2xl">{{ revTitle }}</h2>
        <h2 class="font-bold text-xl">Review By: {{revName}}</h2>
        <p class="text-lg">{{ revText }}</p>
        <span>Review Rating: {{ revRate }} </span>
    </td>
</tr>
</template>

<script setup>
const props = defineProps(['revName','revRate','revText','revTitle'])

</script>