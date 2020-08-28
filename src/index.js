import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reducers from './reducers'
import { createStore } from 'redux';
import { Provider }  from 'react-redux';
// import {browserHistory} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {persistStore, persistReducer} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

const store = createStore(newStore)
const persistor = persistStore(store)
const newStore = Object.assign(store, persistor)

// const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
    <Provider store = {newStore}>
        <Router>
            <PersistGate persistor = {persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>, document.querySelector('#root')
);


