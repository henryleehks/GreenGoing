import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Favourites from '../views/Favourites.vue'
import Cart from '../views/Cart.vue'
import Listings from '../views/Listings.vue'
import Listing_Review from '../views/Listing_Review.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },

    {
      path: '/',
      name: 'Favourites',
      component: Favourites
    },

    {
      path: '/',
      name: 'Cart',
      component: Cart
    },

    {
      path: '/',
      name: 'Listings',
      component: Listings
    },

    {
      path: '/',
      name: 'Listing_Review',
      component: Listing_Review
    }



    
  ]
})

export default router
