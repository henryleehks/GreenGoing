import {reactive} from 'vue'


const loggedInUser = reactive({
    Name:'',
    UserID:''
})

const cart = reactive({
    inCart: []
})

export var currentID = reactive({
    currentID: '12345',
    updateCurrentID(new_id) {
        this.currentID = new_id
    }
})


export {
    cart,
    loggedInUser,
}