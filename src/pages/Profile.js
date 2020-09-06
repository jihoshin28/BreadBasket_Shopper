import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCurrentShopper} from '../actions'

export class Profile extends Component{
    componentDidMount(){
        this.props.getCurrentShopper(this.props.userAuthId) 
    }
    render(){   
        return (
            <div>
                <h3>Profile Page</h3>
                <div id = "profileDiv" class = "container">
                    <div>
                        <h4>Name</h4>
                        <h4>{this.props.userAuthName}</h4>
                    </div>
                    <div>
                        <h4>Image</h4>
                        <img src = {this.props.userAuthPic}></img> 
                    </div>
                    <div>
                        <h4>Age</h4>

                    </div>
                    <div>
                        <h4>Number of Orders</h4>
                        
                    </div>
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


export default connect(mapStateToProps,{getCurrentShopper})(Profile)