let INITIAL_STATE = {
    confirm: {
        "title": "",
        "message": "",
    }
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'CONFIRM_DELETE_ORDER'){
        return { 
            ...state, confirm: {
                "title": "Delete Order",
                "message": "Are you sure you want to delete this order?"
            }
        }
    }
    
    return state
}