import authReducer from './authReducer'
import itemsReducer from './itemsReducer'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


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


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentUser']
}

const reducer = combineReducers({
    items: itemsReducer,
    currentUser: currentUser,
    auth: authReducer,
    items: itemsReducer
})

export default persistReducer(persistConfig, reducer)