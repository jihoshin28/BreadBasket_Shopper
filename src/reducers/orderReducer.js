let INITIAL_STATE = {
    current_order_id: null,
    order_items: {},
    active_order_ids: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "PLACED_ORDER"){
        return {...state, current_order_id: action.payload}
    }

    if (action.type === 'ADD_ORDER_ITEM') {
        return { ...state, order_items: { ...state.order_items, [action.payload.id]: action.payload.order_item } }
    }

    if(action.type === 'DROP_ORDER'){
        return {...state, order_id: null, order_items: {}}
    }

    if(action.type === "GET_ACTIVE_ORDERS"){
        return {...state, active_order_ids: action.payload}
    }
    return state
}