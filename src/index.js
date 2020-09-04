import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { Provider }  from 'react-redux';
import { createBrowserHistory } from 'history'
import {BrowserRouter as Router} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './store'

let history = createBrowserHistory()

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <PersistGate persistor = {persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>, document.querySelector('#root')
);


