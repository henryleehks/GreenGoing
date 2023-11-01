

<template>
    <nav class="fixed top-0 left-0 z-20 w-full bg-[#CFCAC2] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
            <!-- GreenGoing logo -->
            <div class="flex items-center">
                <img src="src/assets/logo.png" class="h-14 mr-3" alt="GreenGoing Logo" />
            </div>
    
            
    
            <!-- button to access navbar on on mobile sizes -->
            <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500" aria-controls="navbar-multi-level" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
    
            <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <ul class="flex flex-col font-medium p-5 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#CFCAC2] md:flex-row md:space-x-12 md:mt-0 md:border-0">
    
                    <li>
                      <form>
                            <label for="default-search" class="mb-2 mx-5 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                              <!-- svg -->
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <!-- search bar -->
                                <input type="search" id="default-search" class="block w-full p-2 pl-8 pr-12 mx10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-grey-200" placeholder = 'Search Experiences!' required>
                                <!-- submit button -->
                                <button type="submit" class="text-white absolute right-1 bottom-1 bg-neutral-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-[#50A060] font-xsmall rounded-md text-xs px-1 py-1">Search</button>
                            </div>
                        </form>
                    </li>
    
                    <li>
                        <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-neutral-500 rounded md:bg-transparent md:text-[#50A060] md:p-0" aria-current="page">
                            Home
                        </a> -->
                        <RouterLink to="App.vue" class="block py-2 pl-3 pr-4 text-white bg-neutral-500 rounded md:bg-transparent md:text-[#50A060] md:p-0" aria-current="page">
                            Home
                        </RouterLink>
                    </li>
                    
                    <li>
                        <RouterLink to="itinerary.vue" class="block py-2 pl-3 text-white rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-[#50A060] md:p-0">
                            Itinerary
                        </RouterLink>
                    </li>
                    <li>
                        <!-- <a href="#" class="block py-2 pl-3 text-white rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-[#50A060] md:p-0">
                          Favourites
                        </a> -->
                        <RouterLink to="Favourites.vue" class="block py-2 pl-3 text-white rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-[#50A060] md:p-0">
                            Favourites
                        </RouterLink>
                    </li>
                    <li>
                        <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-[#50A060] md:p-0">My Cart</a> -->
                        <RouterLink to="Cart.vue" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-[#50A060] md:p-0">
                            My Cart
                        </RouterLink>
                    </li>
    
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-white border-t border-gray-100 hover:bg-[#50A060] md:hover:bg-transparent md:border-0 md:hover:text-[#50A060] md:p-0 md:w-auto">
                            <img src="src/assets/User Profile Icon.png" />
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
    
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">My Bookings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">My Account</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-700 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign
                                    out
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
    
<script>
export default {
    name: 'Navbar'
}
</script>
    