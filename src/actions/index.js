import rails from '../services/Rails'

let token = localStorage.getItem('rails_token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    "Authorization": token
}

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: 
        [
            {
                title: "Meat/Seafood",
                name: "meats"
            },
            {
                title: "Produce",
                name: "produce"
            },
            {
                title: "Dairy",
                name: "dairy"
            },
            {
                title: "Bakery",
                name: "bakery"
            },
            {
                title: "Snacks",
                name: "snacks"
            },
            {
                title: "Beverages",
                name: "beverages"
            },
            {
                title: "Frozen",
                name: "frozen"
            },
            {
                title: "Household",
                name: "household"
            }

        ]
    }
}

export const getItems = (store_id) => async dispatch => {
    const response = await rails.get(`/items?store_id=${store_id}`, {headers})
    dispatch({type: 'GET_ITEMS', payload: response.data})
}

export const getFilteredItems = (store_id, category) => async dispatch => {
    const response = await rails.get(`/items?store_id=${store_id}&category=${category}`)
    dispatch({type: 'GET_FILTERED_ITEMS', payload: response.data})
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

export const signIn = userInfo => async dispatch => {
    const response = await rails.post('/login', {shopper: userInfo, headers})
    let data = response.data
    console.log(data)
    localStorage.setItem('rails_token', data.jwt)
    dispatch({
        type: 'SIGN_IN',
        payload: data.shopper.data.attributes
    })
}

export const signOut = () => {
    localStorage.removeItem('rails_token')
    return {
        type: 'SIGN_OUT'
    }
}