<template>
    <button v-on:click="getcart()" style="color: black;">CLICK</button>
    <ul id="cart"></ul>
</template>

<script>








export default {

    name: 'Checkout'
    ,
    methods: {
        hello(data) {
            alert(data)
        },
        getcart() {
            var storedCart = window.localStorage.getItem("cart");

            let cartList = document.getElementById("cart");
            //cartList.innerHTML = "";
            var totalPrice = 0;

            for (let item of storedCart) {

                console.log(item)
                /* 
                let img = document.createElement('img');
                img.src = item.imgurl;
                cartList.appendChild(img);


                let listItem = document.createElement("li");
                listItem.innerText = `${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
                cartList.appendChild(listItem);
                totalPrice += item.price;

                cartList.appendChild(document.createElement("br")); */
            }

            let totalItem2 = document.createElement("br");
            cartList.appendChild(totalItem2);

            cartList.appendChild(document.createElement("br"));

            let totalItem = document.createElement("li");
            totalItem.innerText = `Total: $${totalPrice.toFixed(2)}`;
            cartList.appendChild(totalItem);
            // window.localStorage.setItem("cart", JSON.stringify(cart));

        }
    }
}
</script>