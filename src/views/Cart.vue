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
    style="height: 100%; width: 0;  position: fixed; z-index: 1; top: 0; left: 0; background-color: white; overflow-x: hidden; padding-top: 60px; transition: 0.5s;">
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
                            <br>

                            <br>
                            <a href="./checkout"
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

            <!-- <div id="item1"
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
                                                        </div> -->

            <div v-for="doc of allDocs" :cardID=doc.ID :cardName=doc.Data.Name :cardImg=doc.Data.images[0]
                :cardRating=doc.Data.rating :cardRatingImg=doc.Data.rating_img :card-price=doc.Data.Price_level>
                <!-- <h1 style="color: black;">{{ doc.Data.Name }} </h1>
                                                <br> -->
                <div
                    class="col-span-1 rounded-3xl transition duration-500 ease-in-out scale-90 hover:scale-100 w-64 h-96 max-w-sm bg-white border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 align-bottom">
                    <div class="relative">
                        <!-- <RouterLink :to=cardURL class='flex flex-column' @click="currentID.updateCurrentID(theURL)">
                            <img class="h-40 w-full p-2.5 rounded-3xl" :src="cardImg" alt="product image" />
                        </RouterLink> -->
                        <img class="h-40 w-full p-2.5 rounded-3xl" :src="doc.Data.images[0]"
                            alt="product image" />

                        <div class="absolute top-3 right-4">
                            <button @click="togglefav()" class="scale-75 hover:scale-90">
                                <img :id="cardID" src="/src/assets/Favorite_fillwhite@2x.png">
                            </button>
                        </div>
                    </div>

                    <div class="px-5 pb-5 mx-auto">
                        <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            {{ doc.Data.Name }}
                        </h5>
                        

                        <div class="flex items-center mt-2.5 mb-5">
                            <img :src="doc.Data.rating_img" />
                            <span
                                class="bg-green-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                Rating: {{ doc.Data.rating }}
                            </span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-gray-900 dark:text-white">{{
                                doc.Data.Price_level
                            }}</span>


                            <button
                                class="transition duration-500 ease-in-out bg-green-500 text-white sm:text-black sm:bg-white sm:border sm:border-black hover:border-white hover:bg-green-500 hover:text-white hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center"
                                v-on:click="addToCart(doc.ID, doc.Data.Name, doc.Data.Price_level, doc.Data.images[0], doc.Data.rating)">
                                Cart
                            </button>
                        </div>
                    </div>


                </div>



            </div>


        </div>


    </div>
</template>


<script>


import { initCarousels, initDropdowns } from 'flowbite'
import itemCardVue from '../components/CartCard.vue'
import { getAllDocuments } from '../db/dbfunctions.js'
import { db } from '../db/FireBaseDB.js'
import { currentUser, currentID } from '../db/localstore'

const allDocs = await getAllDocuments(db)

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

            // REMOVE FUNCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
            //myFunction(item.cartID);
            let counter = 0;

            for (let thingy of cart) {
                //alert(thingy)
                console.log(item.cartID);
                console.log(thingy.cartID);
                console.log("^ DING ^")
                //console.log(IDzz);
                if (item.cartID == thingy.cartID) {
                    console.log(thingy.cartID);
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
                    this.myFunction(item.cartID);
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
            console.log("ID - " + ID)
            console.log("Name - " + productName)
            console.log("Price - " + price)
            console.log("IMG - " + imgurl)
            console.log("Type - " + type)

            let stringWithDollarSign = price;
            let stringWithoutDollarSign = stringWithDollarSign.replace(/\D/g, '');
            let intValue = parseInt(stringWithoutDollarSign, 10);



            cart.push({ ID: ID, name: productName, price: intValue, imgurl: imgurl, type: type, cartID: cartID });

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
                listItem.innerText = `${item.cartID}  .  ${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
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

                    for (let thingy of cart) {
                        //alert(thingy)
                        console.log(item.cartID);
                        console.log(thingy.cartID);
                        console.log("^ DING ^")
                        //console.log(IDzz);
                        if (item.cartID == thingy.cartID) {
                            console.log(thingy.cartID);
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
                            // REMOVE FUNCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
                            //myFunction(item.cartID);
                            let counter = 0;

                            for (let thingy of cart) {
                                //alert(thingy)
                                console.log(item.cartID);
                                console.log(thingy.cartID);
                                console.log("^ DING ^")
                                //console.log(IDzz);
                                if (item.cartID == thingy.cartID) {
                                    console.log(thingy.cartID);
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
                                    // REMOVE FUNCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
                                    //myFunction(item.cartID);
                                    let counter = 0;

                                    for (let thingy of cart) {
                                        //alert(thingy)
                                        console.log(item.cartID);
                                        console.log(thingy.cartID);
                                        console.log("^ DING ^")
                                        //console.log(IDzz);
                                        if (item.cartID == thingy.cartID) {
                                            console.log(thingy.cartID);
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
                                            // REMOVE FUNCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
                                            //myFunction(item.cartID);
                                            let counter = 0;

                                            for (let thingy of cart) {
                                                //alert(thingy)
                                                console.log(item.cartID);
                                                console.log(thingy.cartID);
                                                console.log("^ DING ^")
                                                //console.log(IDzz);
                                                if (item.cartID == thingy.cartID) {
                                                    console.log(thingy.cartID);
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
                                                    this.myFunction(item.cartID);
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

                });

                // Append the button to the document body
                cartList.appendChild(button);


            }
            // Example function to be executed when the button is clicked
            cartList.appendChild(document.createElement("br"));
            let totalItem2 = document.createElement("br");
            cartList.appendChild(totalItem2);

            let totalItem = document.createElement("h2");
            console.log(totalPrice)
            totalItem.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
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


    },

    mounted() {
        console.log('hello');
        initCarousels();
        initDropdowns();
        console.log('username');
        console.log(currentUser.UserName)
        console.log('user_ID')
        console.log(currentUser.UserID)
        console.log('loc_ID');
        console.log(currentID.currentID)

    },
    components: { itemCardVue },
    data() {
        return {
            allDocs
        }

    }
}


</script> 