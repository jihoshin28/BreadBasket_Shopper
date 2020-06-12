import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import NavBar from './containers/NavBar'
import About from './containers/About'
import OrderPage from './containers/OrderPage'
import OrderHistory from './containers/OrderHistory'

function App() {
  return (
    
      <div className="App">

        <div class="ui segment">

          <Router>
            <NavBar />
            <Route exact path='/' render={(props) => <About {...props} />} />
            <Route exact path='/orderpage' render={(props) => <OrderPage {...props} />} />
            <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
          </Router>
        </div>

        <footer className="footer">
          <p>Allen Shin</p>
        </footer>
      </div>
      

  );
}

export default App;
