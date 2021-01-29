import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { Provider }  from 'react-redux';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './store'
import {createBrowserHistory} from 'history'

let history = createBrowserHistory()

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <PersistGate persistor = {persistor}>
                <App history = {history}/>
            </PersistGate>
        </Router>
    </Provider>, document.querySelector('#root')
);


