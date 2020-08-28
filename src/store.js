import {persistStore} from 'redux-persist'
import {createStore} from 'redux'

import reducers from '/reducers'

const store = createStore(reducers)

const persistStore = persistStore(store)

export default {store, persistStore}