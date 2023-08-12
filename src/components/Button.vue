<script setup>

defineProps(
    ['name', 'customClass' ]
)

</script>

<template>
  <button class="bg-red-400 text-white px-4 py-2 font-semibold" :class="customClass">{{name}}</button>
</template>

<style scoped>

</style>