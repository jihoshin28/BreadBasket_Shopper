import {combineReducers} from 'redux'
import authReducer from './authReducer'

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

const currentUser = (state = {}, action) => {
    if(action.type === "CURRENT_USER"){
        return {
            ...state,
            userAuthName: action.payload.first_name,
            userAuthPic: action.payload.image
        }
    }
    return state
}


export default combineReducers({
    items: itemsReducer,
    currentUser: currentUser,
    auth: authReducer
})
