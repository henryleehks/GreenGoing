    <template>
    <div>
        <section class="bg-center bg-no-repeat" :style="{ backgroundImage: `url('img/Singapore_nature.jpg')` }">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-40 lg:py-45">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl rounded-lg">View Product</h1>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Home
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Check Out
            </a>
            </div>
            <svg class="animate-bounce mt-4" width="100%" height="100%">
            <image x="25%" y="25%" width="50%" height="50%" :xlink:href="'img/down_arrow.png'" />
            </svg>
        </div>
        </section>

        <div class="box-border border-4 rounded-lg p-3 mt-3 mx-2 border-black">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
            <img :src="'img/bird-paradise-crimson-wetlands.png'" class="card-img-top" alt="...">
            </div>
            <div class="md:w-1/2 p-3 md:ml-10">
            <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Bird Paradise</h5>
                </a>
                <p class="mb-4 text-lg font-normal text-gray-700 dark:text-gray-400">Description of the attraction</p>
                <button
                class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                @click="addToCart('Bird Paradise Ticket', 10.00, 'img/bird-paradise-crimson-wetlands.png', 'Adult')"
                >
                Add To Cart
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        cart: [],
        };
    },
    methods: {
        addToCart(productName, price, imgurl, type) {
        this.cart.push({ name: productName, price: price, imgurl: imgurl, type: type });
        this.updateCart();
        localStorage.setItem("cart", JSON.stringify(this.cart));
        },
        updateCart() {
        let cartList = document.getElementById("cart");
        cartList.innerHTML = "";
        var totalPrice = 0;

        for (let item of this.cart) {
            let img = document.createElement('img');
            img.src = item.imgurl;
            cartList.appendChild(img);

            let listItem = document.createElement("li");
            listItem.innerText = `${item.name} - $${item.price.toFixed(2)} - ${item.type}`;
            cartList.appendChild(listItem);
            totalPrice += item.price;
            cartList.appendChild(document.createElement("br"));
        }

        let totalItem2 = document.createElement("br");
        cartList.appendChild(totalItem2);

        let totalItem = document.createElement("li");
        totalItem.innerText = `Total: $${totalPrice.toFixed(2)}`;
        cartList.appendChild(totalItem);
        localStorage.setItem("cart", JSON.stringify(this.cart));
        },
    },
    };
    </script>
