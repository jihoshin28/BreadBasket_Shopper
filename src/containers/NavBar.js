import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'
import { getActiveOrders} from '../actions'
import { isEmpty } from 'lodash'
import NotificationBadge, { Effect } from 'react-notification-badge'

export class Navbar extends Component {
    componentDidUpdate(prevState){
        if(prevState.activeOrders.length != this.props.activeOrders.length){
            this.props.getActiveOrders(this.props.shopperId)
        }
    }

    renderUser = () => {
        if(!!this.props.signedIn){   
            return (
                <div>
                    <a class="nav-link">
                        <Link to={process.env.PUBLIC_URL + '/profile'}>
                            <img class="google-pic" alt="alt img" src={this.props.userAuthPic} />
                        </Link>
                    </a>
                </div>
            )
        }
    }

    render() {
        let cart_length
        if(isEmpty(this.props.cartItems) || !this.props.cartItems){
            cart_length = 0
        } else {
            cart_length = Object.keys(this.props.cartItems).length
        }
        return ( 
            
            <nav class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm nav-bg">
            
                   
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse " id="navbarNav">
                    <Link class='header-logo' to={process.env.PUBLIC_URL + '/'}>
                        <img class="header-icon" src={process.env.PUBLIC_URL + '/bread_basket_icon.jpg'}></img>

                    </Link>
                    {(!!this.props.signedIn) ?
                    
                    <ul class="navbar-nav">
                        <li class="nav-item nav-list active">
                            <a href = "/orderpage" class="menu-button">
                                Order
                            </a>
                        </li>
                            
                        {(!isEmpty(this.props.activeOrders)) ? 
                                <li class="nav-item nav-list">
                                    <a href = "/active_orders" class="menu-button">Active Orders</a>
                                </li>
                                :
                                null
                        }
                        <li class="nav-item nav-list">
                            <a href= {process.env.PUBLIC_URL + "/order_history"} class="menu-button">Order History</a>
                        </li>
                        <li class="nav-item nav-list">
                            <a href = {process.env.PUBLIC_URL + '/about'} class="menu-button">About</a>
                        </li>
                    </ul>
                    :
                    <ul class="navbar-nav">
                        <li class="nav-item nav-list">
                            <a href = {process.env.PUBLIC_URL + "/about"} class="menu-button">About</a>
                        </li>
                    </ul>
                    }
                </div>
                {(!!this.props.signedIn) ? 
                <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item">
                        <button class="btn btn-warning" type="button">
                            <NotificationBadge style = {{left: '90%', bottom:'0px', top: 'none', right: 'none'}} count = {cart_length} effect = {Effect.SCALE}/> 
                            <Link class="text-reset" to={process.env.PUBLIC_URL + '/cart'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                                </svg>
                            </Link>
                        </button>
                    </li>
                </ul>
                :
                <div></div>
                }
                
                <GoogleAuth history = {this.props.history} />
                <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item">
                        {this.renderUser()}
                    </li>
                </ul>

            </nav>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        activeOrders: state.order.active_orders,
        shopperId: state.auth.currentShopper.id,
        signedIn: state.auth.signedIn,
        userAuthPic: state.auth.currentShopper.image,
        cartItems: state.cart.cart_items
    })
}

export default connect(mapStateToProps, { getActiveOrders})(Navbar)
