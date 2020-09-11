import rails from '../services/Rails'
import categories from '../categories'

//STORE ACTIONS
export const getStores = () => async dispatch => {
    const response = await rails.get(`/stores`)
    dispatch({ type: 'GET_STORES', payload: response.data.data })
}

export const selectStore = (store) => {
    return ({
        type: 'SELECT_STORE',
        payload: store
    })
}

//SEEDED ITEMS AND CATEGORIES

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

//CART ACTIONS

export const getCart = (cart_id) => async dispatch => {
    const response = await rails.get(`/cart_items?cart_id=${cart_id}`)
    let data = response.data
    console.log(data.data)
    dispatch({type: "GET_CART", payload: data.data})
}

export const startCart = cartInfo => async dispatch => {
    const response = await rails.post('/carts', {cart: cartInfo})
    let data = response.data
    console.log(data.cart.data.attributes, 'cart')
    localStorage.setItem('cart_token', data.jwt)
    dispatch({ type: 'START_CART', payload: data.cart})
}

export const dropCart = () => {
    return ({
        type: 'DROP_CART'
    })
}

//CART ITEM ACTIONS

export const addCartItem = cartItemInfo => async dispatch => {
    const response = await rails.post('/cart_items', {cart_item: cartItemInfo})
    let data = response.data
    console.log(data.data, 'cart_item added')
    dispatch({ type: "ADD_CART_ITEM", 
                payload: { 
                    cart_item: data.data,
                    id: data.data.id
                }
            })
}

export const removeCartItem = cartItemId => async dispatch => {
    const response = await rails.delete(`/cart_items/${cartItemId}`)
    let data = response.data 
    console.log(data)
    dispatch({type: "DROP_CART_ITEM", payload: cartItemId})
}

export const cartItemCount = (newCount, cartItemId) => {
    console.log(newCount, cartItemId)
    return ({
        type: "CHANGE_COUNT_CART_ITEM",
        payload: { count: newCount, cartItemId: cartItemId }
    })
}


//ORDER ACTIONS

export const preOrder = orderInfo => async dispatch => {
    const response = await rails.post(`/orders`, {order: orderInfo})
    let id = parseInt(response.data.data.id)
    let orderData = response.data.data.attributes
    dispatch({type: "PRE_ORDER", payload: {
            id: id,
            order: orderData
        } 
    })
}

export const updatePreOrder = (orderId, orderInfo) => async dispatch => {
    console.log(orderId)
    const response = await rails.patch(`/orders/${orderId}`, {order: orderInfo})
    console.log(response.data)
    let id = parseInt(response.data.data.id)
    let orderData = response.data.data.attributes
    dispatch({
        type: "PRE_ORDER", payload: {
            id: id,
            order: orderData
        }
    })
}

export const getActiveOrders = shopperId => async dispatch => {
    const response = await rails.get(`/orders?shopper_id=${shopperId}&status=active`)
    let data = response.data.data
    dispatch({type: "GET_ACTIVE_ORDERS", payload: data})
}

export const completeOrder = () => {
    return ({
        type: "COMPLETE_ORDER"
    })
}

export const changeOrderStatus = (id, status) => async dispatch => {
    const response = await rails.patch(`orders/${id}`, status)
    console.log(response.data)
}

export const addOrderItem = orderItemInfo => async dispatch => {
    const response = await rails.post(`/order_items`, {order_item: orderItemInfo})
    let data = response.data
    console.log(data)
}

export const cancelOrder = (id) => async dispatch => {
    const response = await rails.delete(`/orders/${id}`)
    console.log(response.data)
    dispatch({ type: "CANCEL_ORDER", payload: id })
}

export const getOrderItems = (order_id) => async dispatch => {
    const response = await rails.get(`order_items?order_id=${order_id}`)
    console.log(response.data)
    dispatch({type: "GET_ORDER_ITEMS", payload: response.data.data})
}

export const clearOrderItems = () => {
    return({
        type: "CLEAR_ORDER_ITEMS"
    })
}

//AUTH ACTIONS

export const signIn = (userInfo) => async dispatch => {
    const response = await rails.post('/login', {shopper: userInfo})
    let data = response.data
    localStorage.setItem('shopper_token', data.jwt)
    console.log(data.shopper.data.attributes)
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

//USER PROFILE ACTIONS

export const createShopperProfile = (shopperInfo) => async dispatch => {
    const response = await rails.post('/shopper_infos/', shopperInfo)
    let data = response.data
    console.log(data)
    dispatch({
        type: 'PROFILE_INFO',
        payload: data.data
    })
}

export const editShopper = (form, id) => async dispatch => {
    console.log(form)
    const response = await rails.patch(`/shoppers/${id}`, form)
    let data = response.data
    console.log(data.data)
    dispatch({ type: "EDIT_SHOPPER", payload: data.data.attributes })
}

export const editShopperProfile = (form, id) => async dispatch => {
    const response = await rails.patch(`/shopper_infos/${id}`, form)
    let data = response.data.data
    console.log(data)
    dispatch({ type: "EDIT_PROFILE", payload: data.attributes })
}

