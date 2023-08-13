<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import SearchBar from "../components/SearchBar.vue";
import ProductCategory from "../components/ProductCategory.vue";
import CategoryList from "../components/CategoryList.vue";

import { useCategoryStore } from "../store/CategoryStore.js";

const store = useCategoryStore();

const productCategories = store.productCategories;
</script>

<template>
  <section>
    <header>
      <NavBar />
    </header>
    <main class="flex">
      <div v-if="store.categoryList" class="border px-4">
        <CategoryList />
      </div>
      <div class="flex flex-col w-full">
        <section
          class="h-[300px] bg-[url('./assets/hero.jpg')] bg-cover bg-center flex justify-center items-center"
        >
          <div class="flex flex-col justify-center items-center space-y-4 w-8/12">
            <h1 class="text-4xl font-semibold">Groceries delivered in 30 minutes</h1>
            <SearchBar customClass="rounded border border-gray-400" />
          </div>
        </section>
        <section class="flex justify-center flex-col items-center my-10">
          <h2 class="text-3xl mb-10">Our Product Categories</h2>

          <div class="grid grid-cols-3 gap-4">
            <ProductCategory
              :categoryName="category.categoryName"
              :icon="category.icon"
              v-for="(category, index) in productCategories"
              :key="index"
              class="border rounded pl-20 pr-8 py-6"
            />
          </div>
        </section>
      </div>
    </main>
  </section>
</template>

<style scoped></style>
