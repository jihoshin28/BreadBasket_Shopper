import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signIn, signOut, dropCart} from '../actions'

class GoogleAuth extends React.Component{
   
    componentDidMount() {
        console.log(this.props.history, "history!!")
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '30752304516-hq148b4og5mh54aphpmsuus4049qv04n.apps.googleusercontent.com',
                scope: 'profile'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.authChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authChange)
            })
        })
        
    }   

    componentDidUpdate(){
        if(!!this.props.signedIn){

        }
    }

    authChange = (userStatus) => {
        if (!!userStatus) {

            let user = this.auth.currentUser.get()
            let userInfo =
            {
                email: user.rt.$t,
                first_name: user.rt.tV,
                last_name: user.rt.uT,
                image: user.rt.TJ
            }
            this.props.signIn(userInfo)
            // this.navigateToOrder()
        } else {
            this.props.signOut()
        }
    }
  
    signIn = () => {
        this.auth.signIn().then(()=>{
            this.props.history.push('/orderpage')
            this.props.history.go()
        })
    }

    
    signOut = () => {
        this.auth.signOut()
        this.props.dropCart()
        // localStorage.removeItem('rails_token')
    }

    renderAuthButton = () => {
        if(this.props.signedIn === null){
            return <div>I don't know</div>
        } else {
            if(this.props.signedIn === true){
                return (
                    <button type="button" class= "btn btn-outline-primary" onClick = {this.signOut}> 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        Sign Out
                    </button>
                )
            } else {
                
                return (
                    <div class = 'log-button'>
                        <button type="button" class="btn btn-outline-primary" onClick={this.signIn}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Sign In
                        </button>
                    </div>
                )
            }
        }
    }
    render(){
        return(   
                <div>
                {this.renderAuthButton()}
                    {(!this.props.signedIn) ? 
                    <Redirect to = '/'/> :
                    <Redirect to = '/orderpage'/>
                }
                </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        signedIn: state.auth.signedIn
    })
}

export default connect(mapStateToProps, {signIn, signOut, dropCart})(GoogleAuth)