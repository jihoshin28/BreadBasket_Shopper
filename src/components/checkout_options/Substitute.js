import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {updateOrderSubstitute} from '../../actions'

class Substitute extends React.Component {
  
    selectOption = (e) => {
        this.props.updateOrderSubstitute(e.target.value)
    }

    render(){
        return(
            <div className = "ui container">
                <h4>
                    If you can't find my items:
                </h4>
                <div className = "button-options">
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = 'contact'>Contact me for replacements.</button> 
                    </div>  
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = 'choose'>Choose any replacements for me.</button> 
                    </div>
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = 'none'>Don't make any replacements.</button> 
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default connect(null, {updateOrderSubstitute})(Substitute)