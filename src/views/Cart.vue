<style>
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.butt {
    background-color: rgb(156, 255, 200);
    font-size: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px;
    border-radius: 10px;
}

/* Updated styles for responsiveness */
#item1,
#item2,
#item3,
#item4,
#item5,
#item6,
#item7,
#item8 {
    width: 100%;
    padding: 10px;
}

.flex.items-center.justify-start {
    max-width: 200px;
    /* Adjust the value as per your requirements */
}

@media screen and (max-width: 768px) {

    #PageContent,
    #PageContent2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #item1,
    #item2,
    #item3,
    #item4 {
        width: 100%;
    }

}

@media screen and (max-width: 1000px) {

    #PageContent,
    #PageContent2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    /* #item1,#item2,#item3,#item4{
                width: 50%;
            } */
}

img {
    border-radius: 20px;
}
</style>

<template>
    <!-- <h1 style="color: black;">hello world</h1> -->

    <div id="mySidenav"
        style="height: 100%; width: 250;  position: fixed; z-index: 1; top: 0; left: 0; background-color: white; overflow-x: hidden; padding-top: 60px; transition: 0.5s;">
        <br>

        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()"
            style="padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #818181; display: block; transition: 0.3s;">&times;</a>

        &nbsp
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
            style="position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px;">&times;</a>
        <div class="container">
            <div class="row">
                <div class="col-lg"></div>
                <div class="col-lg">
                    <div id="alerts" class="ms-text-center"></div>
                    <div id="loading" class="spinner-container ms-div-center">
                        <div class="spinner"></div>
                    </div>
                    <div id="content" class="hide">
                        <div class="ms-card ms-fill" style="padding: 10px; color: black; font-weight: 900;">
                            <h1 style="text-align: center; font-size: 120%;">YOUR ITEMS</h1>
                            <br>
                            <ul id="cart"></ul>
                            <a href="./checkout.html"
                                style="background-color: rgb(156, 255, 200); font-size: 20px; border: 1px; border-radius: 10px; text-align: center; color: black; padding: 20px;">CHECKOUT</a>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                        </div>
                        <div id="payment_options"></div>
                    </div>
                </div>
                <div class="col-sm"></div>
            </div>
        </div>
    </div>
    <button v-on:click="openNav()"
        style="font-weight: 900; text-align: center; display: flex; justify-content: center; align-items: center; color: black;">CART</button>

    <div id="main"
        style="display: flex; text-align: center; padding-left: 10%; padding-right: 10%; transition: margin-left .5s; padding: 30px; ">
        <div id="PageContent" class="container flex flex-1 justify-center md:justify-start "
            style=" display: flex; width: 100%; display: flex; flex-wrap: wrap; justify-content: center; ">

            <div id="item1"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover"
                style="width: 100%;">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/a.jpg" alt="product image" />
                </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Wild Wild
                            Ticket
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$10</span>
                        &nbsp
                        <a href="protoreview.html"
                            v-on:click="sendoverrev(1, 'img/a.jpg', 'Wild Wild Ticket', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="sendoverrev(1, 'img/a.jpg', 'Wild Wild Ticket', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(1, 'Wild Wild Ticket', 10.00, 'img/a.jpg', 'Adult')">Add Cart</button>
                    </div>
                </div>
            </div>
            &nbsp
            &nbsp
            &nbsp
            &nbsp
            &nbsp


            <div id="item2"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover"
                style="width: 100%;">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/b.png" alt="product image" />
                </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Bird Paradise
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">3.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$20</span>
                        &nbsp
                        <a href="protoreview.html"
                            v-on:click="sendoverrev(2, 'img/b.png', 'Bird Paradise', 'My House', 5, 'NIL') ; ">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                onclick="sendoverrev(2,'img/b.png','Bird Paradise','My House',5,'NIL') ; ">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(2, 'Bird Paradise', 20.00, 'img/b.png', 'Adult')">Add Cart</button>
                    </div>
                </div>
            </div>
            &nbsp
            &nbsp
            &nbsp
            &nbsp
            &nbsp

            <div id="item3"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover"
                style="width: 100%;">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/c.jpg" alt="product image" />
                </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Gardens Nina Buay
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$50</span>
                        &nbsp
                        <a href="protoreview.html"
                            v-on:click="sendoverrev(3, 'img/c.jpg', 'Gardens Nina Buay', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="sendoverrev(3, 'img/c.jpg', 'Gardens Nina Buay', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(3, 'Gardens Nina Buay', 50.00, 'img/c.jpg', 'Adult')">Add Cart</button>
                    </div>
                </div>
            </div>
            &nbsp
            &nbsp
            &nbsp
            &nbsp
            &nbsp

            <div id="item4"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/d.jpg" alt="product image" />
                </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Changi Jewel Tour
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$90</span>
                        &nbsp
                        <a href="protoreview.html"
                            v-on:click="sendoverrev(4, 'img/d.jpg', 'Changi Jewel Tour', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="sendoverrev(4, 'img/d.jpg', 'Changi Jewel Tour', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(4, 'Changi Jewel Tour', 90.00, 'img/d.jpg', 'Adult')">Add Cart</button>
                    </div>
                </div>
            </div>
            &nbsp
            &nbsp
            &nbsp
            &nbsp
            &nbsp

            <div id="item5"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/e.jpeg" alt="product image" />
                </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Garden Walk
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$15</span>
                        &nbsp
                        <a href="protoreview.html"
                            v-on:click="sendoverrev(5, 'img/e.jpeg', 'Garden Walk', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="sendoverrev(5, 'img/e.jpeg', 'Garden Walk', 'My House', 5, 'NIL') ; location.href = 'protoreview.html';">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(5, 'Garden Walk', 15.00, 'img/e.jpeg', 'Adult')">Add Cart</button>
                    </div>
                </div>
            </div>
            &nbsp
            &nbsp
            &nbsp
            &nbsp
            &nbsp

            <div id="item6"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/f.jpg" alt="product image" />
                </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">MBS Tour
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">2.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$98</span>
                        &nbsp
                        <a href="protoreview.html"
                            v-on:click="sendoverrev(6, 'img/f.jpg', 'MBS Tour', 'My House', 2, 'NIL') ; ">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="sendoverrev(6, 'img/f.jpg', 'MBS Tour', 'My House', 2, 'NIL') ; ">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(6, 'MBS Tour', 98.00, 'img/f.jpg', 'Adult')">Add Cart</button>
                    </div>
                </div>
            </div>
            &nbsp
            &nbsp
            &nbsp
            &nbsp
            &nbsp

            <div id="item7"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/g.jpg" alt="product image" />
            </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Universal
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">1.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$70</span>
                        &nbsp
                        <a href="protoreview.html"
                            onclick="sendoverrev(7,'img/g.jpg','Universal','My House',1,'NIL') ; location.href = 'protoreview.html';">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="sendoverrev(7, 'img/g.jpg', 'Universal', 'My House', 1, 'NIL') ; location.href = 'protoreview.html';">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(7, 'Universal', 70.00, 'img/g.jpg', 'Adult')">Add Cart</button>
                    </div>
                </div>
            </div>
            &nbsp
            &nbsp
            &nbsp
            &nbsp
            &nbsp

            <div id="item8"
                class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-xl shadow light:bg-gray-800 dark:border-gray-700 object-cover">
                <a href="#">
                    <img class="rounded-xl object-cover" src="img/h.jpg" alt="product image" />
                </a>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight text-gray-900 light:text-white">Merlion
                        </h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/color_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <img class="w-4 h-4" src="img/grey_tree.png">
                        <span
                            class="bg-light green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">3.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 light:text-black">$50</span>
                        &nbsp
                        <a href="protoreview.html"
                            v-on:click="sendoverrev(8, 'img/h.jpg', 'Merlion', 'My House', 3, 'NIL') ; location.href = 'protoreview.html';">
                            <button
                                class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                v-on:click="sendoverrev(8, 'img/h.jpg', 'Merlion', 'My House', 3, 'NIL') ; location.href = 'protoreview.html';">View
                                More</button>
                        </a>
                        &nbsp
                        <button
                            class="text-black bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                            v-on:click="addToCart(8, 'Merlion', 50.00, 'img/h.jpg', 'Adult')">Add Cart</button>
                        <!-- <button onclick="openNav()" style="color: black;">OPEN</button>
                                                            <a href="./checkout.html"
                                                                style="background-color: rgb(156, 255, 200); font-size: 20px; border: 1px; border-radius: 10px; text-align: center; color: black; padding-right: 20px;">CHECKOUT</a> -->
                    </div>
                </div>
            </div>


            <!-- <button v-on:click="hello('DATA')" style="color: black;">CLICK ME</button> -->



        </div>


    </div>
</template>


<script>

var cart = [];

var cartID = 1;

export default {

    name: 'Cart'
    ,
    methods: {
        hello(data) {
            alert(data)
        },
        sendoverrev(ID, imgurl, Name, address, ratings, misc) {
            let reviewcache = []
            reviewcache.push({ ID: ID, imgurl: imgurl, Name: Name, address: address, ratings: ratings, misc: misc });
            window.localStorage.setItem("specificz", JSON.stringify(reviewcache));
            window.location.href = "protoreview.html";
        },
        myFunction(IDzz) {
            //console.log("Button clicked!");

            // Add your desired functionality here

            let counter = 0;

            for (item of cart) {
                //console.log(item.cartID);
                //console.log(IDzz);
                if (item.cartID == IDzz) {
                    console.log(IDzz);
                    console.log("^ DING ^")
                    cart.splice(counter, 1);
                    break

                }
                counter += 1;
            }
            // cart.push({ ID:ID,name: productName, price: price, imgurl: imgurl, type: type });
            let cartList = document.getElementById("cart");
            cartList.innerHTML = "";
            var totalPrice = 0;

            for (let item of cart) {
                let img = document.createElement('img');
                img.src = item.imgurl;
                cartList.appendChild(img);


                console.log(item)
                let listItem = document.createElement("li");
                //listItem.innerText = `${item.cartID}. ${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
                listItem.innerText = `${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
                cartList.appendChild(listItem);
                totalPrice += item.price;
                //cartList.appendChild(document.createElement("br"));
                // Create a button element
                var button = document.createElement("button");
                // Set the button text
                button.innerHTML = "Remove";
                // Add an event listener to the button
                //button.addEventListener("click", myFunction);
                button.addEventListener("click", function () {
                    myFunction(item.cartID);
                });

                // Append the button to the document body
                cartList.appendChild(button);
                // Example function to be executed when the button is clicked


            }


            cartList.appendChild(document.createElement("br"));
            let totalItem2 = document.createElement("br");
            cartList.appendChild(totalItem2);

            let totalItem = document.createElement("li");
            totalItem.innerText = `Total: $${totalPrice.toFixed(2)}`;
            cartList.appendChild(totalItem);
            window.localStorage.setItem("cart", JSON.stringify(cart));
            window.localStorage.setItem("crt", cart)
        },
        updateCart() {

        },
        addToCart(ID, productName, price, imgurl, type) {
            cart.push({ ID: ID, name: productName, price: price, imgurl: imgurl, type: type, cartID: cartID });

            let cartList = document.getElementById("cart");
            cartList.innerHTML = "";
            var totalPrice = 0;

            for (let item of cart) {
                let img = document.createElement('img');
                img.src = item.imgurl;
                cartList.appendChild(img);


                //console.log(item)
                let listItem = document.createElement("li");
                //listItem.innerText = `${item.cartID}. ${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
                listItem.innerText = `${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
                cartList.appendChild(listItem);
                totalPrice += item.price;
                //cartList.appendChild(document.createElement("br"));
                // Create a button element
                var button = document.createElement("button");
                // Set the button text
                button.innerHTML = "Remove";
                // Add an event listener to the button
                //button.addEventListener("click", myFunction);
                button.addEventListener("click", function () {

                    // REMOVE FUNCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
                    //myFunction(item.cartID);
                    let counter = 0;

                    for (item of cart) {
                        console.log(item.cartID);
                        console.log("^ DING ^")
                        //console.log(IDzz);
                        if (item.cartID == item.cartID) {
                            console.log(item.cartID);
                            cart.splice(counter, 1);
                            break

                        }
                        counter += 1;
                    }
                    //cart.push({ ID:ID,name: productName, price: price, imgurl: imgurl, type: type });
                    let cartList = document.getElementById("cart");
                    cartList.innerHTML = "";
                    var totalPrice = 0;

                    for (let item of cart) {
                        let img = document.createElement('img');
                        img.src = item.imgurl;
                        cartList.appendChild(img);


                        //console.log(item)
                        let listItem = document.createElement("li");
                        //listItem.innerText = `${item.cartID}. ${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
                        listItem.innerText = `${item.cartID}. ${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
                        cartList.appendChild(listItem);
                        totalPrice += item.price;
                        //cartList.appendChild(document.createElement("br"));
                        // Create a button element
                        var button = document.createElement("button");
                        // Set the button text
                        button.innerHTML = "Remove";
                        // Add an event listener to the button
                        //button.addEventListener("click", myFunction);
                        button.addEventListener("click", function () {
                            myFunction(item.cartID);
                        });

                        // Append the button to the document body
                        cartList.appendChild(button);
                        // Example function to be executed when the button is clicked


                    }


                    cartList.appendChild(document.createElement("br"));
                    let totalItem2 = document.createElement("br");
                    cartList.appendChild(totalItem2);

                    let totalItem = document.createElement("li");
                    totalItem.innerText = `Total: $${totalPrice.toFixed(2)}`;
                    cartList.appendChild(totalItem);
                    window.localStorage.setItem("cart", JSON.stringify(cart));
                    window.localStorage.setItem("crt", cart)

                });

                // Append the button to the document body
                cartList.appendChild(button);
                // Example function to be executed when the button is clicked


            }


            cartList.appendChild(document.createElement("br"));
            let totalItem2 = document.createElement("br");
            cartList.appendChild(totalItem2);

            let totalItem = document.createElement("li");
            totalItem.innerText = `Total: $${totalPrice.toFixed(2)}`;
            cartList.appendChild(totalItem);
            window.localStorage.setItem("cart", JSON.stringify(cart));
            window.localStorage.setItem("crt", cart)
            cartID = cartID + 1;
            console.log(cartID)
        },
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        },

        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }


    }
}


</script> 