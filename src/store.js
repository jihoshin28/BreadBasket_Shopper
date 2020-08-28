import {persistStore} from 'redux-persist'
import {createStore} from 'redux'

import reducers from './reducers'

export const store = createStore(reducers)

export const persistor = persistStore(store)

export default {store, persistor};