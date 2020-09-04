import 'jquery/src/jquery';
import React, {Component} from 'react';
import {
  Redirect,
  Route
} from "react-router-dom"
import {connect} from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import OrderPage from './pages/OrderPage'
import OrderHistory from './pages/OrderHistory'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Cart from './pages/Cart'
import SearchPage from './pages/SearchPage'
import {getStores, getCategories, setHeaders} from './actions'

class App extends Component  {
  
  componentDidMount(){
    this.props.getCategories()
    this.props.getStores()
    console.log(this.props.state)
    // Api.get.Items().then(data => console.log(data))
    // Api.get.ItemsCategory('meats').then(data => console.log(data))
    // Api.get.Stores().then(data => console.log(data))
    // Api.get.Store(1).then(data => console.log(data))
  }
  
  render (){
    return (
      <div className="App">
        <div class="ui segment">
          
            <NavBar />
            <Route exact path='/'>
              {!!this.props.shopperId ? <Redirect to="/orderpage" /> : <Home />}
            </Route> 
            <Route exact path='/about' render={(props) => <About {...props} />} />
            <Route exact path='/cart' render={(props) => <Cart {...props} />} />
            <Route exact path='/orderpage' render={(props) => <OrderPage {...props} />}/>
            <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} />} />
            <Route exact path='/products/:category' render={(props) => <Products {...props} />}/>
            <Route exact path='/search/:item' render={(props) => <SearchPage {...props} />} />
       
        </div>

        <footer className="footer">
          <p>Allen Shin</p>
        </footer>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return({
    shopperId: state.auth.userAuthId,
    state: state
  })
}

export default connect(mapStateToProps, {getStores, getCategories})(App)
