import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';
// import {browserHistory} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './store'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

// const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <PersistGate persistor = {persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>, document.querySelector('#root')
);


