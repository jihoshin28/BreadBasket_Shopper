export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            item: item
        }
    }
}

export const deleteItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: {
            item: item
        }
    }
}

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}