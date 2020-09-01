import authReducer from './authReducer'
import itemsReducer from './itemsReducer'
import categoriesReducer from './categoriesReducer'
import storesReducer from './storesReducer'
import { reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'items', 'categories', 'stores']
}

const reducer = combineReducers({
    items: itemsReducer,
    auth: authReducer,
    categories: categoriesReducer,
    stores: storesReducer,
    form: formReducer
})

export default persistReducer(persistConfig, reducer)