<style scoped>
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
        style="height: 100%; width: 0px;  position: fixed; z-index: 1; top: 0; left: 0; background-color: white; overflow-x: hidden; padding-top: 60px; transition: 0.5s;">
        <br>
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
                            <a href="./checkout"
                                style="background-color: #68BE97; font-size: 20px; border: 1px; border-radius: 10px; text-align: center; color: black; padding: 20px;">CHECKOUT</a>
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
        style="font-weight: 900; text-align: center; display: flex; justify-content: center; align-items: center; color: black; background-color: #68BE97; padding: 5px;">CART</button>

    <div id="main"
        style="display: flex; text-align: center; padding-left: 10%; padding-right: 10%; transition: margin-left .5s; padding: 30px; ">
        <div id="PageContent" class="container flex flex-1 justify-center md:justify-start "
            style=" display: flex; width: 100%; display: flex; flex-wrap: wrap; justify-content: center; ">

            <div class="flex flex-shrink-0 flex-1">
                <div id="featured-listings" style="background-color: bisque;" class="px-6 pt-2 pb-12 pb-24 w-full h-full">

                    

                    <div id="PageContent"
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center content-center">

                        <itemCardVue v-for="doc of allDocs" :cardID=doc.ID :cardName=doc.Data.Name
                            :cardImg=doc.Data.images[0] :cardRating=doc.Data.rating :cardRatingImg=doc.Data.rating_img
                            :card-price=doc.Data.Price_level>
                        </itemCardVue>

                    </div>

                </div>

            </div>





        </div>


    </div>
</template>


<script>

var cart = [];

var cartID = 1;


// getElementById("PageContent").style.height = "100%"


import { initCarousels, initDropdowns } from 'flowbite'
import itemCardVue from '../components/CartCard.vue'
import { getAllDocuments } from '../db/dbfunctions.js'
import { db } from '../db/FireBaseDB.js'
import { currentUser, currentID } from '../db/localstore'

const allDocs = await getAllDocuments(db)

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
                listItem.innerText = `${item.cartID}.${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
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
            document.getElementById("mySidenav").style.width = "0px";
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