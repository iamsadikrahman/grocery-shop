<script setup>
defineProps(
    ['customClass']
)

</script>

<template>
  <section class="w-8/12">
    <input type="text" class=" px-4 py-2 w-full focus-visible:outline-none" :class="customClass" placeholder="Search for products (e.g. eggs, milks, potato)">
  </section>
</template>

<style scoped>

</style>