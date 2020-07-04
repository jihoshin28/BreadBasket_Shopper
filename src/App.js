import 'jquery/src/jquery';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import NavBar from './containers/NavBar'
import About from './pages/About'
import OrderPage from './pages/OrderPage'
import OrderHistory from './pages/OrderHistory'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Data from './data.js'


class App extends Component  {
  constructor(){
    super()
    this.state = {
      data: Data.data
    }
  }
  componentDidMount(){
    console.log(Data.data, this.state.data.categories)
  }
  render (){
    return (
      <div className="App">
        <div class="ui segment">
          <Router>
            <NavBar />
            <Route exact path='/about' render={(props) => <About {...props} />} />
            <Route exact path='/orderpage' render={(props) => <OrderPage {...props} items = {this.state.data.items} categories = {this.state.data.categories} stores = {this.state.data.stores}/>} />
            <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} />} />
            <Route exact path='/products/:category' render={(props) => <Products {...props} items={this.state.data.items} categories={this.state.data.categories} />} />
            <Route exact path='/cart' render={(props) => <Cart {...props} removeItem = {this.removeItem} currentOrder={this.state.data.currentOrder} items={this.state.data.items} />} />
          </Router>
        </div>

        <footer className="footer">
          <p>Allen Shin</p>
        </footer>
      </div>
    );
  }
  
}

export default App;
