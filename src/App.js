import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import NavBar from './containers/NavBar'
import About from './containers/About'
import Works from './containers/Works'
import Contact from './containers/Contact'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <div><h1>Allen Shin</h1></div>
        <Router>
          <NavBar/>
          <Route exact path = '/' render = {(props)=> <About {...props}/>}/>
          <Route exact path = '/works' render = {(props)=> <Works {...props}/>}/>
          <Route exact path = '/contact' render = {(props)=> <Contact {...props}/>}/>
        </Router>
        
      </header>
      <footer className = "footer">
       
        <br></br>
        <br></br>
      </footer>
    </div>
  );
}

export default App;
