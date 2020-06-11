import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
          
                <div class="ui secondary pointing menu">
                    <a class="active item">
                        <Link to='/orderpage'>Make an Order</Link>
                    </a>
                    <a class="item">
                        <Link to='/'>About</Link>
                    </a>
                    <a class="item">
                        <Link to='/orderhistory'>Order History</Link>
                    </a>
                    <div class="right menu">
                        <a class="ui item">
                            Logout
                    </a>
                    </div>
                </div>
                
        
          
        )
    }
}

export default Navbar
