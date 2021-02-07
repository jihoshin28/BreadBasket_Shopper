let INITIAL_STATE = {
    current_order_id: null,
    active_orders: [],
    completed_orders: [],
    order_items: [],
    order_info: {},
    subtotal:null,
    payment: null,
    tax: null,
    tip: null, 
    total: null,
    delivery_time: null,
    complete_time: null,
    substitue: null,
    note: null,
    payment_method: null,
    address: null,
    number: null
}

export default (state = INITIAL_STATE, action) => {
    
    if(action.type === "PRE_ORDER"){
        return {...state, current_order_id: action.payload.id, 
            subtotal: parseInt(action.payload.order.subtotal),
            payment: parseInt(action.payload.order.payment),
            tax: parseInt(action.payload.order.tax),
            tip: parseInt(action.payload.order.tip),
            total: parseInt(action.payload.order.total)
        }
    }
    if(action.type === 'UPDATE_ORDER_NUMBER') {
        return {...state, 
            number: action.payload
        }
    }
   
    if(action.type === 'UPDATE_ORDER_ADDRESS') {
        return {...state, 
            address: action.payload
        }
    }
    
    
    if(action.type === 'CHECKOUT_ORDER'){
        return {...state, current_order_id: null}
    }
    
    if(action.type === "CANCEL_ORDER"){
        return {...state, active_orders: state.active_orders.filter(order => order.id !== action.payload)}
    }
    
    if(action.type === "GET_ACTIVE_ORDERS"){
        return {...state, active_orders: action.payload}
    }

    if (action.type === "GET_COMPLETED_ORDERS") {
        return { ...state, completed_orders: action.payload }
    }
    
    if(action.type === "GET_ORDER_ITEMS"){
        return {...state, order_items: action.payload}
    }
    
    if(action.type === "CLEAR_ORDER_ITEMS"){
        return {...state, order_items: []}
    }
    
    if (action.type === "GET_ORDER") {
        return {
            ...state, order_info: {
                ...state.order_info, payment_info:{
                    subtotal: parseInt(action.payload.subtotal),
                    payment: parseInt(action.payload.payment),
                    tip: parseInt(action.payload.tip),
                    total: parseInt(action.payload.total)
                }
            }
        }
    }
    
    if(action.type === "CLEAR_ORDER"){
        return {
            ...state, order_info: {}
        }
    }
    return state
}