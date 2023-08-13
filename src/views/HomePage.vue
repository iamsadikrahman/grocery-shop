<script setup>
import NavBar from "../components/NavBar.vue";
import SearchBar from "../components/SearchBar.vue";
import ProductCategory from "../components/ProductCategory.vue";

const productCategories = [
  { categoryName: "Fruits and Vegetables", icon: "fa-solid  fa-carrot" },
  { categoryName: "Meat and Fish", icon: "fa-solid fa-fish" },
  { categoryName: "Cooking", icon: "fa-solid fa-utensils" },
  { categoryName: "Beverages", icon: "fa-solid fa-mug-hot" },
  { categoryName: "Home and Cleaning", icon: "fa-solid fa-broom" },
  { categoryName: "Pest Control", icon: "fa-solid fa-virus" },
  { categoryName: "Stationery & Office", icon: "fa-solid fa-stapler" },
  { categoryName: "Beauty Products", icon: "fa-solid fa-eye" },
  { categoryName: "Health Products", icon: "fa-solid fa-notes-medical" },
  { categoryName: "Pet Care", icon: "fa-solid fa-paw" },
  { categoryName: "Kitchen Appliances", icon: "fa-solid fa-kitchen-set" },
  { categoryName: "Baby Care", icon: "fa-solid fa-baby" },
];
</script>

<template>
  <header>
    <NavBar />

    <section
      class="h-[300px] bg-[url('./assets/hero.jpg')] bg-cover bg-center flex justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center space-y-4 w-8/12">
        <h1 class="text-5xl font-semibold">Groceries delivered in 30 minutes</h1>
        <SearchBar customClass="rounded border border-gray-400" />
      </div>
    </section>
  </header>

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
    <div></div>
  </section>
</template>

<style scoped></style>
