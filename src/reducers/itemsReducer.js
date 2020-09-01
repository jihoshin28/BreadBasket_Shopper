let INITIAL_STATE = {
    itemsList: []
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_ITEMS'){
        return {...state, itemsList: action.payload}
    }
    return state
}