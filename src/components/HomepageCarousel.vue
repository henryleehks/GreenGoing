<template>
    
    <div id="user-input-area">


    <div id="homepage-carousel" class="relative w-full m-auto content-center" data-carousel="slide">
    <!-- Carousel wrapper -->
        <div class="absolute h-96 overflow-hidden w-full rounded-b-3xl md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <img src="src/assests/homepage background 1.jpg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <img src="src/assets/homepage background 2.jpeg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <img src="src/assets/homepage background 3.jpg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
    </div>

<!-- user inputs -->

<!-- start and end dates -->
<div class="grid md:grid-rows-3 lg:grid-rows-2 h-screen place-items-center rounded-xl absolute z-1 top-1/4 left-1/2 w-1/2 " id="user-input-box">

  <div class="grid md:row-start-1 md:grid-cols-6 lg:row-start-1 lg:grid-cols-12">

    <div class="lg:col-span-1"></div>

    <div date-rangepicker class="flex items-center md:col-span-6 lg:col-span-7">
      <div class="relative" id="input-start-date">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input datepicker data-date-format="dd/mm/yyyy" datepicker-autohide name="start" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date start">
      </div>
      <span class="mx-4 text-gray-500">to</span>
      <div class="relative" id="input-end-date">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input datepicker data-date-format="dd/mm/yyyy" datepicker-autohide name="end" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date end">
    </div>
</div>

    <div class="lg:col-span-1"></div>

    <div class="hidden lg:block lg:col-span-2 ">
      <input type="number" id="visitors"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Travellers" required>
    </div>

    <div class="lg:col-span-1"></div>

  </div>

  <div class="lg:hidden md:row-start-2 md:block md:col-span-6">
    <input type="number" id="visitors"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Travellers" required>
  </div>

  <div class="hidden lg:block lg:row-start-2 md:row-start-3 md:block">
    <div class="bg-yellow-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 opacity-100">
      <a href="TAILWINDLISTING.html">
        Book your next experience!
      </a>
    </div>
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: 'HomePageCarousel'
    }
    </script>