import _ from 'lodash'

let INITIAL_STATE = {
    cart_id: null,
    cart_items: {},
    subtotal: 0,
    delivery: 0,
    tip: 0
}

export default (state = INITIAL_STATE, action) => {

    if (action.type === 'START_CART') {
        return {
            ...state, cart_id: action.payload.data.attributes.id
        }
    }
    if (action.type === 'GET_CART'){
        return{
            ...state, cart_items: {...state.cart_items, ..._.mapKeys(action.payload,'id')}
        }
    }

    if(action.type === 'DROP_CART'){
        return {...state, 
            cart_id: null, 
            cart_items: {}
        }
    }

    if(action.type === 'CHANGE_STORE'){
        return {...state, 
            cart_id: action.payload.id,
            cart_items: action.payload.cartItems
        }
    }

    if(action.type === 'ADD_CART_ITEM'){
        return {...state, cart_items: {...state.cart_items, [action.payload.id]: action.payload.cart_item}}
    }

    if(action.type === 'DROP_CART_ITEM'){
        return {...state, cart_items: _.omit(state.cart_items, action.payload) }
    }
    
    if(action.type === 'CHANGE_COUNT_CART_ITEM'){
        return  {...state, cart_items: 
                    {...state.cart_items, [action.payload.cartItemId]: 
                        {...state.cart_items[action.payload.cartItemId], attributes: 
                            {...state.cart_items[action.payload.cartItemId].attributes, 
                                "quantity_num": action.payload.count
                            }
                        }
                    }
                }
    }

    if (action.type === "CHECKOUT"){
        return {...state,
            subtotal: action.payload.subtotal,
            delivery: action.payload.delivery,
            tip: action.payload.tip
        }
    }
            
        return state
    }