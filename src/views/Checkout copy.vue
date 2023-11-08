<template v-on:load="getcart()">
    <button v-on:click="getcart()" style="color: black;">CLICK</button>
    
    <div style="text-align: center; margin-left: auto; margin-right: auto;">
    <h1 style="color: black; text-align: center;"> Your Cart</h1>
      <ul id="cart" style="color: black;"></ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Checkout',
    methods: {
      hello(data) {
        alert(data);
      },
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
          listItem.innerText = `${item.cartID}. ${item.name} - $${item.price} - ${item.type}`;
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
      },
    },
    beforeMount() {},
  };
  </script>