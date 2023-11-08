<template>
    <!-- Leave a review header -->
  <div id="PageContent" class="bg-gradient-to-b from-[bisque] to-[#A6CEAE] h-full">
    <div class="bg-blue-500 ">
        <h1 class="mx-auto text-center text-4xl md:text-3xl lg:text-4xl py-10 font-extrabold leading-none tracking-tight text-white">
            Leave a review!
        </h1>
    </div>

    <!-- attraction -->
    <table class="bg-white">
        <tr>
            <td class="w-50 h-50">
              <img src="src/assets/homepage background 3.jpg">
            </td>
            <td class="p-5">
              <h2 class="font-bold text-3xl">Bird Paradise</h2>
              <h2 class="font-bold text-xl">Date: 11/11/23</h2>
              <h2 class="font-bold text-xl">Time: 1300 - 1900</h2>
              <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, repudiandae saepe commodi voluptatum
                perspiciatis natus corporis cupiditate totam odio voluptate possimus? Incidunt enim maxime earum
                consequuntur fugiat quo accusantium officiis.</p>
            </td>
          </tr>
    </table>

    <!-- Rating -->
    <h1 class="mx-auto text-center text-3xl font-semibold text-white py-10">
        Click the trees to rate how eco-friendly and sustainable the attraction is:
    </h1>
        <div class="flex justify-center items-center p-5 mt-2.5 mb-5">
            <img class="w-20 h-20" src="img/grey_tree.png">
            <img class="w-20 h-20" src="img/grey_tree.png">
            <img class="w-20 h-20" src="img/grey_tree.png">
            <img class="w-20 h-20" src="img/grey_tree.png">
            <img class="w-20 h-20" src="img/grey_tree.png">
        </div>


    <div class="mx-auto p-5">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Review
        </label>
        <textarea id="message" rows="10" placeholder="Write your thoughts here..." class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
        </textarea>
    </div>
    



    <!-- Buttons -->
    <div id="submitandcancelbuttons" class="p-5 mt-0">
        <a href="itinerary.html">
            <button class= "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mt-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Submit
            </button>
        </a>
        <a href="itinerary.html">
            <button class= "w-full text-gray-800 bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mt-8 text-center">
                Cancel
            </button>
        </a>
    </div>
    
  </div>
</template>

<script>
export default{
    
}
</script>