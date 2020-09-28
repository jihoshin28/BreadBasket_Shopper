import axios from 'axios'

let shopperToken = localStorage.getItem('shopper_token')
let cartToken = localStorage.getItem('cart_token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    "Authorization": shopperToken
}

export default axios.create({
    baseURL: 'https://bread-basket-backend.herokuapp.com',
    headers: headers 
})