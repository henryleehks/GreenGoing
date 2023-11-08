<template>
    <div id="itinerary-search" class="container justify-center absolute left-0 mt-40 md:mt-45 lg:mt-40 xl:mt-40">
        
        <!-- </form> -->
        <form class="ml-10 mb-5 w-1/3">
            <label for="default-search" class="mb-2 mx-5 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <!-- svg -->
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <!-- search bar -->
                <input type="search" id="default-search-itinerary" class="w-full block p-2.5 pl-8 pr-12 text-xs text-gray-900 border border-gray-300 rounded-lg bg-grey-200" placeholder = 'Search Experiences!' required>
                <!-- submit button -->
                <button type="submit" class="text-white absolute right-1 bottom-1.5 bg-neutral-400 hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-[#50A060] font-xsmall rounded-md text-xs px-1 py-1">Search</button>
            </div>
        </form>


    </div>
</template>