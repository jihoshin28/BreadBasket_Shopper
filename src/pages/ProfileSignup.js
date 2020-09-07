import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import { reduxForm, Field } from 'redux-form'
import { createShopperProfile } from '../actions'

class ProfileSignup extends React.Component {
    renderInput = ({ input, meta, label }) => {
        console.log(input)
        return (
            <div class="input-group">
                <label>{label}</label>
                <input {...input} />
                <div> {meta.error}</div>
            </div>
        )
    }

    profileSubmit = () => {

    }

    render(){
        return(
            <div> 
                <h1> 
                    Welcome {this.props.shopperName}
                </h1>
                <form onSubmit = {this.props.handleSubmit(this.profileSubmit())}>
                    <Field name = "age" component = {this.renderInput} label = "Age"/>
                    <Field name = "address" component = {this.renderInput} label = "Age" />
                    <Field name = "city" component = {this.renderInput} label = "Age" />
                    <Field name = "state" component = {this.renderInput} label = "Age" />
                    <Field name = "zip_code" component = {this.renderInput} label = "Age" />
                    <Field name = "phone" component = {this.renderInput} label = "Age" />
                    <button type="submit" id="button-addon1">Search Item</button>
                </form>
            </div>
        )
    }
}

//age address city state zipcode phone

let validate = (formValues) => {
    let error = {}

    if (!formValues.age) {
        error.age = "Please enter an Item"
    }
    if (!formValues.address) {
        error.address = "Please enter an Item"
    }
    if (!formValues.city) {
        error.city = "Please enter an Item"
    }
    if (!formValues.state) {
        error.state = "Please enter an Item"
    }
    if (!formValues.zip_code) {
        error.zip_code = "Please enter an Item"
    }
    if (!formValues.phone) {
        error.phone = "Please enter an Item"
    }
    

    return error
}

let mapStateToProps = state => {
    return({
        shopperName: state.auth.userAuthName
    })
}

let formWrapped = reduxForm({
    form: 'profileForm',
    validate: validate
})(ProfileSignup)

export default connect(mapStateToProps, {createShopperProfile})(formWrapped)