import {reactive} from 'vue'


const loggedInUser = reactive({
    Name:'',
    UserID:''
})

const cart = reactive({
    inCart: [],
    add_to_cart(item){
        this.inCart.push(item)
    },
    remove_from_cart(value) {
        return this.inCart.filter(function (geeks) {
            return geeks != value;
        });
    }
})

export var currentID = reactive({
    currentID: '',
    updateCurrentID(new_id) {
        this.currentID = new_id
    }
})

export var currentUser = reactive({
    UserID: '',
    UserName:'Anonymous',
    updateCurrentUser(id,name){
        this.UserID = id
        this.UserName = name
    }
})

export var searchQuery = reactive({
    search: '',
    updatesearch(update){
        this.search = update
    }
})

export {
    cart,
    loggedInUser
}