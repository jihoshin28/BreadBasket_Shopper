import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Profile extends Component{
    componentDidMount(){
    }
    capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    render(){   
        return (
            <div>
                <h3>Profile Page</h3>
                <div id = "profileDiv" class = "container">
                    <div>
                        <h4>Name</h4>
                        <h4>{this.capitalize(this.props.userFirstName) + ' ' + this.capitalize(this.props.userLastName)}</h4>
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
        userAuthId: state.auth.currentShopper.id,
        userAuthPic: state.auth.currentShopper.image,
        userFirstName: state.auth.currentShopper.first_name,
        userLastName: state.auth.currentShopper.last_name,
    })
}


export default connect(mapStateToProps)(Profile)