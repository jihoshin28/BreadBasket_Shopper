import rails from '../services/Rails'
import categories from '../categories'

export const getStores = () => async dispatch => {
    const response = await rails.get(`/stores`)
    dispatch({ type: 'GET_STORES', payload: response.data.data })
}

export const selectStore = (store) => {
    console.log(store, 'selected store')
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
    const response = await rails.get(`/items?store_id=${store_id}`)
    console.log(response.data, "items")
    dispatch({type: 'GET_ITEMS', payload: response.data})
}

export const getCart = cartInfo => async dispatch => {
    const response = await rails.post('/carts', {cart: cartInfo})
    let data = response.data
    console.log(data.cart.data.attributes, 'cart')
    localStorage.setItem('cart_token', data.jwt)

    dispatch({ type: 'CURRENT_CART', payload: data.cart})
}

export const addCartItem = cartItemInfo => async dispatch => {
    const response = await rails.post('/cart_items', {cart_item: cartItemInfo})
    let data = response.data
    console.log(data.cart, 'cart_item added')
    dispatch({ type: "ADD_TO_CART", payload: data.cart_item})
}

export const signIn = userInfo => async dispatch => {
    const response = await rails.post('/login', {shopper: userInfo})
    let data = response.data
    localStorage.setItem('shopper_token', data.jwt)
    dispatch({
        type: 'SIGN_IN',
        payload: data.shopper.data.attributes
    })
}

export const signOut = () => {
    localStorage.removeItem('shopper_token')
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
