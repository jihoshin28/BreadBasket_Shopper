let INITIAL_STATE = {
    confirm: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'CONFIRM_DELETE_ORDER'){
        return { 
            ...state, confirm: {
                "title": "Delete Order",
                "message": "Are you sure you want to delete this order?"
            }
        }
    } else if (action.type === "CLEAR_CONFIRM"){
        return{
            confirm: null
        }
    }
    
    return state
}