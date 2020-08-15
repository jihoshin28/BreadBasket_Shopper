import React from 'react'
import reducers, { connect } from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{
   
 
  
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