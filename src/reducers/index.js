import {combineReducers} from 'redux'

const itemsReducer = (listofItems = [], action) => {
    if(action.type === 'ADD_ITEM'){
        return [...listofItems, action.payload.item]
    }   
    if (action.type === 'DELETE_ITEM') {
        return listofItems.filter(item => {
            return item !== action.payload.item
        })
    }
    return listofItems
}

const usersReducer = (currentUser = null, action) => {
    if(currentUser !== null){
        return null
    }
    return currentUser
}

export default combineReducers({
    items: itemsReducer,
    users: usersReducer
})
