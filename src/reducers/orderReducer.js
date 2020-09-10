let INITIAL_STATE = {
    current_order_id: null,
    active_orders: [],
    subtotal:null,
    payment: null,
    tip: null, 
    total: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "PRE_ORDER"){
        return {...state, current_order_id: action.payload.id, 
            subtotal: parseInt(action.payload.order.subtotal),
            payment: parseInt(action.payload.order.payment),
            tip: parseInt(action.payload.order.tip),
            total: parseInt(action.payload.order.total)
        }
    }

    if(action.type === 'DROP_ORDER'){
        return {...state, current_order_id: null}
    }

    if(action.type === "GET_ACTIVE_ORDERS"){
        return {...state, active_orders: action.payload}
    }
    
    return state
}