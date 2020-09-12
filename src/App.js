import 'jquery/src/jquery';
import React, {Component} from 'react';
import {
  Route
} from "react-router-dom"
import {connect} from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/CheckOut'
import CurrentOrders from './pages/CurrentOrders'
import EditShopper from './pages/EditShopper'
import ItemDetails from './pages/ItemDetails'
import OrderPage from './pages/OrderPage'
import OrderHistory from './pages/OrderHistory'
import PaymentDetails from './pages/PaymentDetails'
import Profile from './pages/Profile'
import Products from './pages/Products'
import ProfileSignup from './pages/ProfileSignup'
import SearchPage from './pages/SearchPage'
import ViewItems from './pages/ViewOrderItems'
import {getStores, getCategories, signOut} from './actions'

class App extends Component  {
  
  componentDidMount(){
    this.props.getCategories()
    this.props.getStores()
    console.log(this.props.state)
  }
  
  render (){
    return (
      <div className="App">
        <div class="ui segment">
            <NavBar history = {this.props.history}/>
            <Route exact path='/' render={(props) => <Home {...props} />}></Route> 
            <Route exact path='/about' render={(props) => <About {...props} />} />
            <Route exact path='/cart' render={(props) => <Cart {...props} />} />
            <Route exact path='/checkout' render={(props) => <Checkout {...props} />} />
            <Route exact path='/current_orders' render={(props) => <CurrentOrders {...props} />} />
            <Route exact path='/edit_shopper/:section' render={(props) => <EditShopper {...props} />} />
            <Route exact path='/item_details/:item_id' render={(props) => <ItemDetails {...props} />} />
            <Route exact path='/orderpage' render={(props) => <OrderPage {...props} />}/>
            <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} />} />
            <Route exact path='/profile_signup' render={(props) => <ProfileSignup {...props} />} />
            <Route exact path='/products/:category' render={(props) => <Products {...props} />}/>
            <Route exact path='/payment_details/:order_id' render={(props) => <PaymentDetails {...props} />} />
            <Route exact path='/search/:item' render={(props) => <SearchPage {...props} />} />
            <Route exact path='/view_order_items/:order_id' render={(props) => <ViewItems {...props} />} />
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
    state: state
  })
}

export default connect(mapStateToProps, {getStores, getCategories, signOut})(App)
