import { defineStore } from "pinia";


export const useCategoryStore = defineStore('categoryStore',{
    state: ()=>({
        categoryList: false,
        
        productCategories : [
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
          ]
    })
})

