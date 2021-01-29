let INITIAL_STATE = {
    itemsList: [],
    selectedItem: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_ITEMS'){
        return {...state, itemsList: action.payload}
    }

    if (action.type === 'GET_ITEM') {
        return { ...state, selectedItem: action.payload }
    }

    if(action.type === 'CLEAR_ITEM'){
        return { ...state, selectedItem: null }
    }

    if (action.type === 'GET_ITEM_PIC') {
        return { ...state, selectedItemPic: action.payload }
    }

    if(action.type === 'CLEAR_ITEM_PIC'){
        return { ...state, selectedItemPic: null }
    }

    return state
}