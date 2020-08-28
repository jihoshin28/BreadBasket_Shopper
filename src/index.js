import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reducers from './reducers'
import { createStore } from 'redux';
import { Provider }  from 'react-redux';
// import {browserHistory} from 'react-router'
// import {persistStore, persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

const store = createStore(reducers)
// const persistor = persistStore(store)
// const newStore = Object.assign(store, persistor)
// const persistConfig = {
//     key: 'root',

//     whitelist: ['currentUser']
// }

// const reducer = persistReducer(persistConfig, reducers)

// const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.querySelector('#root')
);


