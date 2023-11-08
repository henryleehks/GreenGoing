<template>
    <div class="cart">

      <div class="display:block lg:flex">
        <h1 class="text-gray-600 font-extrabold text-3xl text-center py-10 lg:ml-16">Your Cart</h1>

        <div class="justify-center flex pb-8 lg:block lg:pt-8 lg:ml-16 ">
          <button @click="getcart" 
          class="items-center transition duration-500 ease-in-out bg-green-500 text-white sm:text-black sm:bg-white sm:border sm:border-black hover:border-white hover:bg-green-500 hover:text-white rounded-lg hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-5 py-2.5 text-center">
            View Your Cart
          </button>
        </div>
      </div>
      
      

      <div class="cart-content">

        <ul id="cart" class="" style="color: black;"></ul>
      
      </div>

      
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'Checkout',
    methods: {
      getcart() {
        var data = window.localStorage.getItem("cart");
        var test = JSON.parse(data);
        console.log(test);
        let cartList = document.getElementById("cart");
        cartList.innerHTML = "";
        var totalPrice = 0;
        for (let item of test) {
          console.log(item);
          let img = document.createElement('img');
          img.src = item.imgurl;
          img.style.width = "50%";
          img.style.display = "block";
          img.style.marginLeft = "auto";
          img.style.marginRight = "auto";
          cartList.appendChild(img);
          let listItem = document.createElement("li");
          listItem.innerText = `${item.cartID}. ${item.name} - $${item.price}`;
          cartList.appendChild(listItem);
          totalPrice += item.price;
          cartList.appendChild(document.createElement("br"));
        }
        let totalItem2 = document.createElement("br");
        cartList.appendChild(totalItem2);
        cartList.appendChild(document.createElement("br"));
        let totalItem = document.createElement("li");
        totalItem.innerText = `Total: $${totalPrice.toFixed(2)}`;
        cartList.appendChild(totalItem);
        let totalItem3 = document.createElement("button");
        totalItem3.innerHTML="Pay Now";

        cartList.appendChild(document.createElement("br"));
        cartList.appendChild(document.createElement("br"));
        cartList.appendChild(totalItem3);

      },
    },
    beforeMount() {},
  };
  </script>
  
  <style scoped>
  
  
    .cart-content {
      text-align: center;
    }
  
    
  </style>
  