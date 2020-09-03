import { actionTypes } from "redux-form"

const INITIAL_STATE = {
    current_cart_id: null,
    current_cart_items: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type = "CURRENT_CART"){
        return {...state, current_cart_id: action.payload.data.attributes.id}
    }
    
    if(action.type = "ADD_TO_CART"){
        return {...state, current_cart_items: [...state.current_cart_items, action.payload.data]}
    }
    return state
}