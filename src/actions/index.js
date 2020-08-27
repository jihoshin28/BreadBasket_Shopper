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

export const currentUser = (userData) => {
    return {
        type: 'CURRENT_USER',
        payload: userData
    }
}

export const signIn = (userStatus) => {
    console.log(userStatus)
    return {
        type: 'SIGN_IN',
        payload: userStatus
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}