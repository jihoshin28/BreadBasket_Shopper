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
import Api from './services/Api'

let data = Data.data
class App extends Component  {
  constructor(){
    super()
    this.state = {
      items: data.items,
      categories: data.categories,
      stores: data.stores,
      selectedStore: data.stores[0].name,
      searchTerm: '',
      foodCategory: null,
      currentOrder: []
    }
  }

  componentDidMount(){
    Api.get.Items().then(data => console.log(data))
    Api.get.ItemsCategory('meats').then(data => console.log(data))
    Api.get.Shopper(1).then(data => console.log(data))
    Api.get.Driver(1).then(data => console.log(data))
    Api.get.Stores().then(data => console.log(data))
    Api.get.Store(1).then(data => console.log(data))
    
  }

  onStoreChange = (e) => {
    console.log(e.target.innerHTML)
    this.setState({
      selectedStore: e.target.innerHTML
    })
  }

  onSearchSubmit = (e) => {
    console.log(this.state.searchTerm, this.state.items)
    window.location.replace(`/products/search/${this.state.searchTerm}`)
  }

  onSearchChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  onCategoryChange = (category) => {
    window.location.replace(`/products/${category}`)
  }
  
  render (){
    return (
      <div className="App">
        <div class="ui segment">
          <Router>
            <NavBar />
            <Route exact path='/about' render={(props) => <About {...props} />} />
            <Route exact path='/orderpage' render={(props) => <OrderPage {...props} 
              items = {this.state.items} 
              categories = {this.state.categories} 
              stores = {this.state.stores} 
              selectedStore = {this.state.selectedStore} 
              onStoreChange = {this.onStoreChange} 
              onSearchSubmit = {this.onSearchSubmit} 
              onSearchChange = {this.onSearchChange}
            />}/>
            <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} />} />
            <Route exact path='/products/:category' render={(props) => <Products {...props} 
              items={this.state.items} 
              categories={this.state.categories} 
              foodCategory = {this.state.foodCategory}
              selectedStore = {this.state.selectedStore}
              onSearchSubmit={this.onSearchSubmit}
              onSearchChange={this.onSearchChange}
              onCategoryChange= {this.onCategoryChange}
            />}/>
            <Route exact path='/cart' render={(props) => <Cart {...props} 
              removeItem = {this.removeItem} 
              currentOrder={this.state.currentOrder} 
              items={this.state.items} 
            />} />
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
