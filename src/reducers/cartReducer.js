let INITIAL_STATE = {
    cart_id: null,
    cart_items: []
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'START_CART') {
        return { ...state, cart_id: action.payload.data.attributes.id }
    }

    if(action.type === 'GET_CART'){
        return {...state, cart_items: action.payload}
    }

    if(action.type === 'DROP_CART'){
        return {...state, cart_items: []}
    }

    if(action.type === 'ADD_CART_ITEM'){
        return {...state, cart_items: [...state.cart_items, action.payload]}
    }

    if(action.type === 'DROP_CART_ITEM'){
        return {...state, cart_items: [...state.cart_items.filter(key => key.id !== action.payload)] }
    }

    return state
}