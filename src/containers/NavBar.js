import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

export class Navbar extends Component {
    renderUser = () => {
        if(!!this.props.isSignedIn){   
            return (
                <div>
                    <a class="nav-link">
                        <Link to='/profile'>
                            <img class="google-pic" alt="alt img" src={`${this.props.userAuthPic}`} />
                        </Link>
                    </a>
                </div>
            )
        }
    }

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
                    </ul>
                </div>
                <ul class = "navbar-nav cart-nav">
                    <li class="nav-item">
                        <button class="btn btn-outline-success" type="button"><Link class = "text-reset" to='/cart'>Cart</Link></button>
                    </li>
                </ul>
                <GoogleAuth/>
                <ul class="navbar-nav cart-nav">
                    <li class = "nav-item">
                        {this.renderUser()} 
                    </li>
                </ul>
                
            </nav>
        
          
        )
    }
}
let mapStateToProps = (state) => {
    return ({
        isSignedIn: state.auth.isSignedIn,
        userAuthPic: state.auth.userPic,
        userAuthName: state.auth.userName
    })
}

export default connect(mapStateToProps)(Navbar)
