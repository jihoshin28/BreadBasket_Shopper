import rails from '../services/Rails'
import categories from '../categories'

let userToken = localStorage.getItem('user_token')
let cartToken = localStorage.getItem('cart_token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    "Authorization": userToken,
    "Cart" : cartToken
}

export const getStores = () => async dispatch => {
    const response = await rails.get(`/stores`, { headers })
    console.log(response.data.data[0])
    dispatch({ type: 'GET_STORES', payload: response.data.data })
}

export const selectStore = (store) => {
    return ({
        type: 'SELECT_STORE',
        payload: store
    })
}

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: categories
    }
}

export const getItems = (store_id) => async dispatch => {
    const response = await rails.get(`/items?store_id=${store_id}`, {headers})
    dispatch({type: 'GET_ITEMS', payload: response.data})
}

export const getCart = cartInfo => async dispatch => {
    const response = await rails.post('/carts', {cart: cartInfo}, {headers})
    let data = response.data
    localStorage.setitem('cart_item', data.jwt)
    dispatch({ type: 'CURRENT_CART', payload: data.cart})
}

export const signIn = userInfo => async dispatch => {
    const response = await rails.post('/login', {shopper: userInfo, headers})
    let data = response.data
    console.log(data)
    localStorage.setItem('user_token', data.jwt)
    dispatch({
        type: 'SIGN_IN',
        payload: data.shopper.data.attributes
    })
}

export const signOut = () => {
    localStorage.removeItem('user_token')
    return {
        type: 'SIGN_OUT'
    }
}


// export const addItem = (item) => {
//     return {
//         type: 'ADD_ITEM',
//         payload: {
//             item: item
//         }
//     }
// }

// export const deleteItem = (item) => {
//     return {
//         type: 'DELETE_ITEM',
//         payload: {
//             item: item
//         }
//     }
// }
