<template>
    <div class="cart-container">
      <button @click="getcart" class="click-button">VIEW YOUR CART</button>
      <br>
      <br>
  
      <div class="cart-content">
        <h1 class="cart-title">Your Cart</h1>
        <br>
        <ul id="cart" class="cart-list" style="color: black;"></ul>
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
    /* Add your CSS styles here */
    .cart-container {
      text-align: center;
      margin: 0 auto;
      max-width: 400px;
      padding: 20px;
      background-color: #f8f8f8;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      
    }
  
    .click-button {
      background-color: rgb(156, 255, 200);
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      color: black;
    }

    
      
    
  
    .click-button:hover {
      background-color: rgb(156, 255, 200);
    }
  
    .cart-title {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .cart-content {
      text-align: center;
    }
  
    .cart-list {
      list-style: none;
      padding: 0;
    }
  
    .cart-list img {
      width: 50%;
      display: block;
      margin: 0 auto;
    }
  
    .cart-list li {
      color: #333;
      font-size: 16px;
      margin: 10px 0;
    }
  
    .cart-list br {
      display: block;
      margin: 5px 0;
    }
  
    .cart-total {
      font-weight: bold;
      font-size: 18px;
    }
  </style>
  