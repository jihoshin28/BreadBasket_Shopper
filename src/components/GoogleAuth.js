import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {signIn, signOut, dropCart, checkoutOrder} from '../actions'

class GoogleAuth extends React.Component{
    componentDidMount() {

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '30752304516-ggggsie2ovojktqo5u0hfomi1gt9518v.apps.googleusercontent.com',
                scope: 'profile'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.authChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authChange)
            })
        })
        
    }   

    componentDidUpdate(prevState){
        // if (prevState.signedIn !== this.props.signedIn){
        //     this.redirect()
        // }
    }
    

    authChange = (userStatus) => {
        if (!!userStatus) {
            let user = this.auth.currentUser.get().getBasicProfile()
            console.log(user)
            let userInfo =
            {
                email: user.getEmail(),
                first_name: user.getGivenName(),
                last_name: user.getFamilyName(),
                image: user.getImageUrl()
            }
            this.props.signIn(userInfo)
        } else {
            this.props.signOut()
        }
    }

    signIn = () => {
        if(!!this.auth){
            this.auth.signIn()
        }
    }

    
    signOut = () => {
        if(!!this.auth){
            this.auth.signOut()
            this.props.dropCart()
            this.props.checkoutOrder()
        }
  
        // localStorage.removeItem('rails_token')
    }

    // redirect = () => {
    //     if (!!this.props.signedIn && !this.props.shopperInfo) {
    //         console.log(this.props.signedIn, this.props.shopperInfo)
    //         this.props.history.push('/profile_signup')
    //         this.props.history.go()
    //     } else if (!!this.props.signedIn && !!this.props.shopperInfo) {
    //         this.props.history.push('/orderpage')
    //     } else {
    //         this.props.history.push('/')
    //         this.props.history.go()
    //     }
    // }

    renderAuthButton = () => {
        if(this.props.signedIn === null){
            return <div>I don't know</div>
        } else {
            if(this.props.signedIn === true){
                return (
                    <Link class="btn btn-outline-primary" to='/' onClick={this.signOut} >

                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        Sign Out
                    </Link>
                    // <button type="button" class= "btn btn-outline-primary" onClick = {this.signOut}> 
                    //     <Link to='/'>Order History</Link>
                    //     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    //         <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    //     </svg>
                    //     Sign Out
                    // </button>
                )
            } else {
                
                return (
                    <Link class="btn btn-outline-primary" to='/orderpage' onClick={this.signIn}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        Sign In
                    </Link>
                    // <div class = 'log-button'>
                    //     <button type="button" class="btn btn-outline-primary" onClick={this.signIn}>
                    //         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    //             <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    //         </svg>
                    //         Sign In
                    //     </button>
                    // </div>
                )
            }
        }
    }

    
    render(){
        return(   
            <div>
                {this.renderAuthButton()}
            </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        shopperId: state.auth.currentShopper.id,
        signedIn: state.auth.signedIn,
        shopperInfo: state.auth.currentShopper.shopper_info
    })
}

export default connect(mapStateToProps, {signIn, signOut, dropCart, checkoutOrder})(GoogleAuth)