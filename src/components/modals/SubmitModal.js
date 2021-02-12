import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'


class SubmitModal extends React.Component {
    type = this.props.submitType 
    renderInput = ({ input, meta, label }) => {

        return (
            <div>
                <label> {label}</label>
                <input {...input} /> 
                <div>{meta.error} </div>
            </div>
        )
    }

    renderForm = () => {
        if(this.type === "number"){
            return (
                <form id = "modalSubmit" onSubmit = {this.props.handleSubmit(this.submit)}>
                    <Field name = "number" component = {this.renderInput} label = "Phone Number"/>
                </form>
            )
        } else if(this.type === "address"){
            return(
                <form id = "modalSubmit" onSubmit = {this.props.handleSubmit(this.submit)}>
                    <Field name = "street" component = {this.renderInput} label = "Street "/>
                    <Field name = "city" component = {this.renderInput} label = "City "/>
                    <Field name = "state" component = {this.renderInput} label = "State "/>
                    <Field name = "zip_code" component = {this.renderInput} label = "Zip Code "/>
                </form>
            )

        }
    }

    submit = (formValues) => {
        console.log(formValues)
        
        if(this.type === "number"){
            
        } else if (this.type === "address"){

        }
    }

    render(){
        return (
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id = "ModalLabel">{this.props.message}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div>
                        {this.renderForm()}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" form = "modalSubmit">Confirm</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
            
        )
    }
}

let validate = (formValues) => {
    let error = {}

    if(!formValues.number){
        error.searchItem = "Please enter an Item"
    }

    return error
}

let formWrapped = reduxForm({
    form: 'modalSubmit',
    validate: validate
})(SubmitModal)

let mapStateToProps = state => {
    return({
        submitType: state.modals.submit.type
    })
} 

export default connect(mapStateToProps, {})(formWrapped)