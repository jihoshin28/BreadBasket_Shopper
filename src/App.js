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
import data from './data'


class App extends Component  {
  constructor(){
    super()
    this.state = {
      items: [
        {
          image: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
          name: "Tomato",
          count: 1,
          price: .75
        },
        {
          image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          name: "Bananas",
          count: 5,
          price: .50
        },
        {
          image: "https://www.sprouts.com/wp-content/uploads/2017/11/Sweet-Potatoes.jpg",
          name: "Sweet Potatoes",
          count: 9,
          price: .25
        },
        {
          image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F10%2Fdozen-eggs-in-carton.png",
          name: "Eggs",
          count: 1,
          price: 3.50
        },
        {
          image: "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg?itok=j89yDeId",
          name: "Bread",
          count: 1,
          price: 2.00
        }
      ],
      categories: [
        {
          name: "Meat/Seafood",
          url: "meats"
        },
        {
          name: "Produce",
          url: "produce"
        },
        {
          name: "Dairy",
          url: "dairy"
        },
        {
          name: "Snacks",
          url: "snacks"
        },
        {
          name: "Beverages",
          url: "beverages"
        },
        {
          name: "Frozen",
          url: "frozen"
        },
        {
          name: "Household",
          url: "household"
        },
        {
          name: "Etc.",
          url: "etc"
        }
      ],
      currentOrder: {}
      
    }
  }
  render (){
    return (
      <div className="App">
        <div class="ui segment">
          <Router>
            <NavBar />
            <Route exact path='/about' render={(props) => <About {...props} />} />
            <Route exact path='/orderpage' render={(props) => <OrderPage {...props} items = {this.state.items} categories = {this.state.categories}/>} />
            <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} />} />
            <Route exact path='/products/:category' render={(props) => <Products {...props} items={this.state.items} categories={this.state.categories} />} />
            <Route exact path='/cart' render={(props) => <Cart {...props} />} currentOrder = {this.state.currentOrder}/>
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
