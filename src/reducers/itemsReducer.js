let INITIAL_STATE = {
    category: null,
    itemsList: {}
}


export default (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_ITEMS'){
        return {...state, itemsList: action.payload}
    }

    if(action.type === 'GET_FILTERED_ITEMS'){
        return {...state, itemsList: action.payload}
    }
    return state
}