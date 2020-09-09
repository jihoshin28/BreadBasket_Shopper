let INITIAL_STATE = {
    order_id: null,
    order_items: {}
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "PLACED_ORDER"){
        return {...state, order_id: action.payload}
    }

    if (action.type === 'ADD_ORDER_ITEM') {
        return { ...state, order_items: { ...state.order_items, [action.payload.id]: action.payload.order_item } }
    }
    return state
}