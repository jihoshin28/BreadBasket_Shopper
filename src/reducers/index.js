import authReducer from './authReducer'
import itemsReducer from './itemsReducer'
import currentUser from './currentUser'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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