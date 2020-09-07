import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

export class Navbar extends Component {
    componentDidMount(){
        console.log(this.props.userAuthPic)
    }

    renderUser = () => {
        if(!!this.props.signedIn){   
            return (
                <div>
                    <a class="nav-link">
                        <Link to='/profile'>
                            <img class="google-pic" alt="alt img" src={this.props.userAuthPic} />
                        </Link>
                    </a>
                </div>
            )
        }
    }

    render() {
        return ( 
            
            <nav class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm navbar-light bg-light">
                
                <a class="navbar-brand" ><Link to='/'>BreadBasket</Link> </a>       
                
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    {(!!this.props.signedIn) ?
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link"><Link to='/orderpage'>Make an Order</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/orderhistory'>Order History</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/about'>About</Link></a>
                        </li>
                    </ul>
                    :
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/about'>About</Link></a>
                        </li>
                    </ul>
                    }
                </div>
                {(!!this.props.signedIn) ? 
                <ul class="navbar-nav cart-nav">
                    <li class="nav-item">
                        <button class="btn btn-outline-success" type="button">
                            <Link class="text-reset" to='/cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                                </svg>
                                Cart
                            </Link>
                        </button>
                    </li>
                </ul>
                :
                <div></div>
                }
                <GoogleAuth history = {this.props.history} />
                <ul class="navbar-nav cart-nav">
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
        signedIn: state.auth.signedIn,
        userAuthPic: state.auth.userAuthPic,
        userAuthName: state.auth.userAuthName
    })
}

export default connect(mapStateToProps)(Navbar)
