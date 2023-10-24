const app = Vue.createApp({
            
});

app.component('topnavbar', {
	// data() {
	// 	return {
			
	// 	}
	// },
	template: ` 
	<!-- topbar -->
	<nav id="topnavbar" class="bg-[#CFCAC2]">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
      <div class="relative flex h-16 items-center justify-between">

        <!-- not sure whats gg on for the navbutton-->
        <div class="absolute flex items-center sm:hidden">

          <!-- Mobile menu button-->
          <button type="button" id="navbutton"
            class="relative flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>

            <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>

        </div>
        <!-- not sure whats gg on for the navbutton^^^-->



        <div class="flex flex-1 justify-center sm:justify-start">
          <!-- Logo -->
          <div class="flex items-center justify-start">
            <a href="homepage.html">
              <img class="h-8 w-auto" src="img/logo.png" alt="Your Company">
            </a>

          </div>

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">

              <!-- Search Bar -->
              <form>
                <div class="relative grid grid-cols-2">
                  <input type="search" id="default-search"
                    class="block w-[200%] p-4 text-sm bg-[#CFCAC2] text-neutral-500 border rounded-full" placeholder="Search" required>
                  <button type="submit" id="SearchButton"
                    class="absolute right-10 bottom-2.5 hover:bg-neutral-500 focus:ring-neutral-400 rounded-full text-sm px-2 py-2">
                    <svg class="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </button>
                </div>
              </form>

              <div class="grid grid-cols-10 gap-10"></div>
              <!-- Buttons -->
              <a href="itinerary.html" id="ItineraryIcon" class="bg-neutral-500 text-white rounded-md px-3 py-2 text-sm"
                aria-current="page">
                <img src="img/notebook.png">
              </a>
              <a href="#" id="FavoritesIcon" class="hover:bg-neutral-400 rounded-md px-3 py-2 text-sm">
                <img src="img/Favourites Icon.png">
              </a>
              <a href="checkout_page.html" id="CartIcon" class="hover:bg-neutral-400 rounded-md px-3 py-2 text-sm">
                <img src="img/Add to Bag Icon.png">
              </a>

            </div>
          </div>
        </div>
        

        <!-- Profile icon-->
        <div id="ProfileIcon" class="relative ml-3">
          <div>
            <button type="button"
              class="relative flex hover:bg-neutral-400 rounded-md px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-10 w-10 rounded-md" src="img/User Profile Icon.png" alt="">
            </button>
          </div>

          
        </div>
      </div>
    </div>


    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <form>
          <div class="relative grid grid-cols-1">
            <input type="search" id="default-search-mobile"
              class="block w-100% p-4 text-sm bg-[#CFCAC2] text-neutral-500 border rounded-full" placeholder="Search" required>
            <button type="submit" id="SearchButton"
              class="absolute right-10 bottom-2.5 hover:bg-neutral-500 focus:ring-neutral-400 font-medium rounded-full text-sm px-2 py-2">
              <svg class="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
        </form>
        <a href="#" class="bg-neutral-500 text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page"><img src="img/notebook.png">Itinerary</a>
        <a href="#" class="text-white hover:bg-neutral-400 block rounded-md px-3 py-2 text-base font-medium"><img
            src="img/Favourites Icon.png">Favorites</a>
        <a href="#" class="text-white hover:bg-neutral-400 block rounded-md px-3 py-2 text-base font-medium"><img
            src="img/Add to Bag Icon.png">Cart</a>
      </div>
    </div>
  </nav>
	`
}).mount('#top')