import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reducers from './reducers'
import { createStore, combineReducers } from 'redux';
import {Provider}  from 'react-redux';
import {browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

const store = createStore(combineReducers({
    ...reducers, 
    routing: routerReducer
}))
console.log(store)
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
    <Provider store = {store}>
        <App history = {history}/>
    </Provider> , document.getElementById('root')
);


