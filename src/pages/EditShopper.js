import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {editShopper} from '../actions'

class EditShopper extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params)
    }

    renderInput = ({input, meta, label}) => {
        return (
            <div>
                <label> {label}</label>
                <input {...input} /> 
                <div>{meta.error} </div>
            </div>
        )
    }

    submitForm = (formValues) => {
        console.log(formValues)
    }

    renderForm(){
        if(this.props.match.params.section === "profile/address"){
            return (
                <div>
                    <Field name = "address" component= {this.renderInput} label = "Address"></Field>
                    <Field name="city" component={this.renderInput} label="City"></Field>
                    <Field name="state" component={this.renderInput} label="State"></Field>
                    <Field name="zip_code" component={this.renderInput} label="Zip Code"></Field>

                </div>
            )

        } else if (this.props.match.params.section === "profile/phone"){
            return (
                <Field name="phone" component={this.renderInput} label="Phone Number"></Field>
            )
        } else if (this.props.match.params.section === "email"){
            return (
                <Field name="email" component={this.renderInput} label="Email"></Field>
            )
        } else if (this.props.match.params.section === "image"){
            return (                
                <Field name="image" component={this.renderInput} label="Image URL"></Field>
            )
        }
    }

    render(){
        return(
            <div>
                <h1>Edit Profile</h1>
                <form onSubmit = {this.props.handleSubmit(this.submitForm)}>
                    {this.renderForm()}
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

let validate = (formValues) => {
    let error = {}
    if (!formValues.address) {
        error.address = "Please enter an address!"
    }

    if (!formValues.city) {
        error.city = "Please enter a city!"
    }

    if (!formValues.state) {
        error.state = "Please enter a state!"
    }

    if (!formValues.zip_code) {
        error.zip_code = "Please enter a zip_code!"
    }
    
    if (!formValues.phone) {
        error.phone = "Please enter a phone number!"
    }

    if (!formValues.email) {
        error.email = "Please enter a email!"
    }

    if (!formValues.image) {
        error.image = "Please enter an image url!"
    }

    return error
}


let formWrapped = reduxForm({
    form: 'editShopperForm',
    validate: validate
})(EditShopper)

export default connect(null)(formWrapped)