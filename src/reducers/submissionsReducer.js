let INITIAL_STATE = {
    submit: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'SUBMIT_ADDRESS'){
        return { 
            ...state, submit: {
                "title": "Add Address",
                'type' : "address"
            }
        }
    } else if(action.type === 'SUBMIT_NUMBER'){
        return { 
            ...state, submit: {
                "title": "Add Number",
                'type': 'number'
            }
        }
    } else if (action.type === "CLEAR_SUBMIT"){
        return{
            submit: null
        }
    } 
    return state
}