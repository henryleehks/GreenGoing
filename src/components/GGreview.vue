<template>
<tr>
    <td>
        <h2 class="font-bold text-2xl">{{ revTitle }}</h2>
        <h2 class="font-bold text-emeral-600 text-xl">Review By: {{revName}}</h2>
        <p class="text-lg">{{ revText }}</p>
        <p>Review Rating: <span>{{ revRate }} </span></p>
    </td>
</tr>
</template>

<script setup>
const props = defineProps(['revName','revRate','revText','revTitle'])

</script>