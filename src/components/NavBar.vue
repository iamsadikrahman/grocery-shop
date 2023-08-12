<script setup>


import SearchBar from "./SearchBar.vue";
import Button from "./Button.vue";
</script>

<template>
  <nav class=" bg-amber-200 flex justify-between">
    <div class="flex items-center justify-around w-11/12 py-2">
      <i class="material-icons ml-4 text-3xl">menu</i>
      <h1 class="text-2xl font-bold uppercase">Grocery Shop</h1>
      <SearchBar/>
      <span class="flex items-center border border-amber-100">
        <i class="material-icons">home</i>
        <select name="" id="" class="p-2 bg-amber-200 font-semibold">
        <option>Dhaka</option>
        <option>Use My Current Location</option>
      </select>
      </span>
    </div>
    <Button name="Sign In" customClass="px-10 w-1/12 text-lg"/>
  </nav>
</template>
<style scoped>
</style>