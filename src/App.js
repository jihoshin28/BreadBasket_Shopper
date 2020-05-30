import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import NavBar from './containers/NavBar'
import About from './containers/About'
import OrderPage from './containers/OrderPage'
import OrderHistory from './containers/OrderHistory'
import Contact from './containers/Contact'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <div><h1>Shopper Page(Windows)</h1></div>
        <Router>
          <NavBar/>
          <Route exact path = '/' render = {(props)=> <About {...props}/>}/>
          <Route exact path = '/orderpage' render = {(props)=> <OrderPage {...props}/>}/>
          <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
          <Route exact path = '/contact' render = {(props)=> <Contact {...props}/>}/>
        </Router>
        
      </header>
      <footer className = "footer">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </footer>
    </div>
  );
}

export default App;
