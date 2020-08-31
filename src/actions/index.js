import rails from '../services/Rails'

const API_ROOT = 'http://localhost:3000'
let token = localStorage.getItem('rails_token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    "Authorization": token
}

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

export const currentUser = userInfo => async dispatch => {
    const response = await rails.post('/login', {shopper: userInfo, headers})
    let data = response.data
    console.log(data)
    localStorage.setItem('rails_token', data.jwt)
    dispatch({
        type: 'CURRENT_USER',
        payload: data.shopper.data.attributes
    })
}

export const signIn = (userStatus) => {
    console.log(userStatus)
    // localStorage.setItem('rails_token', data.jwt)
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