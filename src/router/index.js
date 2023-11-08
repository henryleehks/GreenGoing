import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Favourites from '../views/Favourites.vue'
import Cart from '../views/Cart.vue'
import Listing from '../views/Listings.vue'
import Listing_Review from '../views/Listing_Review.vue'
import checkout from '../views/Checkout.vue'
import itinerary from '../views/Itinerary.vue'
import Login from '../views/login.vue'
import search from '../views/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/search/:id',
      name: 'search',
      component: search
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/itinerary',
      name: 'itinerary',
      component: itinerary
    },
    {
      path: '/listing/:id',
      name: 'Listings',
      component: Listing,
    },


    
  ]
})

export default router
