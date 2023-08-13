<script setup>
import { useCategoryStore } from "../store/CategoryStore.js";
const store = useCategoryStore();
const productCategories = store.productCategories;
</script>

<template>
  <section class="mt-4">
    <h4 class="font-semibold underline">All Categories</h4>
    <ul>
      <li
        v-for="(category, index) in productCategories"
        :key="index"
        class="flex items-center space-x-2 space-y-3"
      >
        <i :class="category.icon"></i>
        <span class="text-gray-700 text-md">{{ category.categoryName }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
