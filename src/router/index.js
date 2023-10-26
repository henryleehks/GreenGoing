import { createRouter, createWebHistory } from 'vue-router'
import Itinerary from '../views/Itinerary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Itinerary',
      component: Itinerary
    }
    
  ]
})

export default router
