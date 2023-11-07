import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Favourites from '../views/Favourites.vue'
import Cart from '../views/Cart.vue'
import Listing from '../views/Listings.vue'
import Listing_Review from '../views/Listing_Review.vue'
import checkout from '../views/Checkout.vue'
import itinerary from '../views/Itinerary.vue'
import Login from '../views/login.vue'
import searchtours from '../views/SearchTours.vue'
import searchhotels from '../views/SearchHotels.vue'
import searchadventures from '../views/SearchAdventures.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/search/tours',
      name: 'searchtours',
      component: searchtours
    },
    {
      path: '/search/hotels',
      name: 'searchhotels',
      component: searchhotels
    },
    {
      path: '/search/adventures',
      name: 'searchadventures',
      component: searchadventures
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
    {
      path: '/listings',
      name: 'Listing_Review',
      component: Listing_Review
    }


    
  ]
})

export default router
