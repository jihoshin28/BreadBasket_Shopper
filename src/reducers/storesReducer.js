let INITIAL_STATE = {
    storesList: [],
    selectedStore: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_STORES'){
        return {...state, storesList: action.payload}
    }

    if(action.type === 'SELECT_STORE'){
        return {...state, selectedStore: action.payload}
    }
    return state
}