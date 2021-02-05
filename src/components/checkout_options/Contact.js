import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getShopperContacts } from '../../actions'

class Contact extends React.Component {
    renderInput({input, label, meta}) {
        console.log(input, label, meta)
        return (
            <div className = "field"> 
                <label>{label}</label>
                <input {...input} />
                <div>{meta.error}</div>
            </div>
        )     
    }

    onSubmit = (id, formValues) => {
        console.log(id, formValues)
        // if(id){
        //     this.props.onSubmit(id, formValues)
        // } else {
        //     this.props.onSubmit(formValues)
        // }
    }

    render() {
        console.log(this.props)
        return (
            <div className = "ui container">
                <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form">
                    <Field name = "title" component = {this.renderInput} label = "Enter Title"/>
                    <Field name = "description" component = {this.renderInput} label = "Enter Description"/>
                    <button className = "ui button red">Submit</button>
                </form>
            </div>
            
        )
    }
}

let formWrapped = reduxForm({
    form: 'contactForm'
})(Contact)

let mapStateToProps = (state) => {
    return ({

    })
}

export default connect(mapStateToProps, {getShopperContacts})(formWrapped)