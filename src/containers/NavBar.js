import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth'

export class Navbar extends Component {
    render() {
        return (    
            <nav class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm navbar-light bg-light">
                <a class="navbar-brand" >BreadBasket</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link"><Link to='/orderpage'>Make an Order</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/about'>About</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/orderhistory'>Order History</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/profile'>Profile</Link></a>
                        </li>
                    </ul>
                </div>
                <ul class = "navbar-nav cart-nav">
                    <li class="nav-item">
                        <button class="btn btn-outline-success" type="button"><Link class = "text-reset" to='/cart'>Cart</Link></button>
                    </li>
                </ul>
                <GoogleAuth/>
                {/* {renderUser} */}
            </nav>
        
          
        )
    }
}

export default Navbar
