import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import NavBar from './pages/NavBar'
import About from './pages/About'
import OrderPage from './pages/OrderPage'
import OrderHistory from './pages/OrderHistory'
import Profile from './pages/Profile'


function App() {
  return (
    
      <div className="App">

        <div class="ui segment">

          <Router>
            <NavBar />
            <Route exact path='/about' render={(props) => <About {...props} />} />
            <Route exact path='/orderpage' render={(props) => <OrderPage {...props} />} />
            <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} />} />
          </Router>
        </div>

        <footer className="footer">
          <p>Allen Shin</p>
        </footer>
      </div>
      

  );
}

export default App;
