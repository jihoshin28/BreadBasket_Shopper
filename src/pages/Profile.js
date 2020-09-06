import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Profile extends Component{
    componentDidMount(){

    }
    render(){   
        return (
            <div>
                <h3>Profile Page</h3>
                <div id = "profileDiv" class = "container">
                    <p>Name: </p>
                    <p>Image:</p>
                    <p>Age:</p>
                    <p>Number of Orders:</p>
                </div>
            </div>

        )
    }
    
}

let mapStateToProps = state => {
    return ({
        userAuthId: state.auth.userAuthId,
        userAuthPic: state.auth.userAuthPic,
        userAuthName: state.auth.userAuthName
    })
}


export default connect(mapStateToProps)(Profile)