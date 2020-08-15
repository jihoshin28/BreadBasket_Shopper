import React from 'react'
import reducers, { connect } from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{
   
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '891785934075-igm1g08q55j6cdm7bnl99lhs19thnma6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.authChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authChange)
            })
        })

    }

    authChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    } 

  
    signIn = () => {
        this.auth.signOut()
    }

    signOut = () => {
        this.auth.signIn()
    }

    renderAuthButton = () => {
        if(this.props.signedIn === null){
            return <div>I don't know</div>
        } else {
            if(this.props.signedIn === true){
                return (
                    <button className = "ui red google button" onClick = {this.signOut}> 
                        <i className = "google icon"></i>
                        Sign Out
                    </button>
                )
            } else {
                return (
                    <button className="ui red google button" onClick={this.signIn}>
                        <i className="google icon"></i>
                        Sign In
                    </button>
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
    return {
        signedIn: state.auth.signedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)