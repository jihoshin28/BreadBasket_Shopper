import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { addShopperNumber, addShopperAddress} from '../../actions'



class SubmitModal extends React.Component {
    type = this.props.submitType 
    renderInput = ({ input, meta, label }) => {
        console.log(input)
        return (
            <div class = "form-group modal-form">
                <label style = {{left: '0'}} for = {label}> {label}</label>
                <input type = "email" id = {label} class= "form-control" {...input} /> 
                <div>{meta.error} </div>
            </div>
        )
    }

    renderForm = () => {
        if(this.type === "number"){
            return (
                <form style = {{width: '100%'}} id = "modalSubmit" onSubmit = {this.props.handleSubmit(this.submit)}>
                    <Field name = "number" component = {this.renderInput} label = "Number"/>
                </form>
            )
        } else if(this.type === "address"){
            return(
                <form style = {{width: '100%'}} id = "modalSubmit" onSubmit = {this.props.handleSubmit(this.submit)}>
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
            console.log(formValues)
        } else if (this.type === "address"){
            console.log(formValues)
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
                    <div class = "modal-form">
                        {this.renderForm()}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" form = "modalSubmit">Submit</button>
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

export default connect(mapStateToProps, {addShopperAddress, addShopperNumber})(formWrapped)