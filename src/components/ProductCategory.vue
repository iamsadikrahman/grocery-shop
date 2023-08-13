<script setup>
defineProps(["categoryName", "icon"]);
</script>

<template>
  <div class="flex justify-between space-x-10">
    <h4>{{ categoryName }}</h4>
    <i :class="icon" class="text-2xl"></i>
  </div>
</template>

<style scoped></style>
