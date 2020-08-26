import React from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'
import Api from '../services/Api'

class GoogleAuth extends React.Component{
   
    componentDidMount() {
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

    authChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    } 

  
    signIn = () => {
        this.auth.signIn().then(data => {
            let userInfo = {
                'email': data.rt.$t,
                'first_name': data.rt.tV,
                'last_name': data.rt.uT,
                'image' : data.rt.TJ
            }
            console.log(userInfo)
            Api.auth.shopperAuth(userInfo).then(data => {
                localStorage.setItem('rails_token', data.jwt)
                console.log(this.props,window.history)
                window.history.pushState('', '', '/orderpage')
            })
        })
    }
    
    signOut = () => {
        this.auth.signOut()
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
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        signedIn: state.auth.isSignedIn
    })
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)