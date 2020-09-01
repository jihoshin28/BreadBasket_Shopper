import authReducer from './authReducer'
import itemsReducer from './itemsReducer'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'items']
}

const reducer = combineReducers({
    items: itemsReducer,
    auth: authReducer
})

export default persistReducer(persistConfig, reducer)