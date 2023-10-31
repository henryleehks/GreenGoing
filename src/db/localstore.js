import {reactive} from 'vue'


const loggedInUser = reactive({
    Name:'',
    UserID:''
})

const cart = reactive({
    inCart: []
})

export default() => {
    cart,
    loggedInUser
}