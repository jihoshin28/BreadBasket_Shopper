import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {updateDeliveryNote} from '../../actions'

class DeliveryNote extends React.Component {

    renderInput({input, label, meta}) {
        console.log(meta)
        return (
            <div className = "field"> 
                <label>{label}</label>
                <input type = "text" {...input} />
                <div>{meta.error}</div>
            </div>
        )     
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.updateDeliveryNote(e.target.children[0].value)
    }

    render(){
        return(
            <div class = "payment-option-bottom">
                <h3>Leave a note for the driver:</h3>
                <form onSubmit = {(e) => this.onSubmit(e)} id = 'delivery-note'>
                    <textarea form = "delivery-note" name="w3review" rows="7" cols="75" placeholder = "F.e. Please leave the delivery on my front porch!">
                    </textarea>
                    <button type = "submit">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {updateDeliveryNote})(DeliveryNote)