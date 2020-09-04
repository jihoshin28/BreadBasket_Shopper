let INITIAL_STATE = {
    cart_id: null,
    cart_items: []
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    if (action.type === 'START_CART') {
        return { ...state, cart_id: action.payload.data.attributes.id }
    }

    if(action.type === 'GET_CART'){
        return {...state, cart_items: action.payload}
    }

    if(action.type === 'DROP_CART'){
        return {...state, cart_items: []}
    }
    return state
}