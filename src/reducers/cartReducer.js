let INITIAL_STATE = {
    cart_id: null,
    cart_items: []
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    if (action.type === 'CART_ID') {
        return { ...state, cart_id: action.payload.data.attributes.id }
    }

    // if(action.type = "ADD_TO_CART"){
    //     return {...state, cart_items: [...state.cart_items, action.payload]}
    // }
    return state
}