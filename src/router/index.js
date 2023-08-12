
import { createWebHistory, createRouter } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')


const routes = [
  { path: '/', component: HomePage },

]

const router = createRouter({
 
  history:createWebHistory(),
  routes, 
})

export default router
