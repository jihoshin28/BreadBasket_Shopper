import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {} from '../../actions'

class Tip extends React.Component {
    componentDidUpdate(prevProps){
        if(prevProps.checkoutTip !== this.props.checkoutTip){
            console.log(this.checkoutTip)
        }

    }
    renderInput({input, label, meta}) {
        console.log(meta)
        return (
            <div>
                <form>
                    <option value="0">
                        <button type="button" class="btn btn-primary btn-lg">0%</button>
                    </option>
                    <option value="5">
                        <button type="button" class="btn btn-primary btn-lg">5%</button>
                    </option>
                    <option value="10">
                        <button type="button" class="btn btn-primary btn-lg">10%</button>
                    </option>
                    <option value="15">
                        <button type="button" class="btn btn-primary btn-lg">15%</button>
                    </option>
                    <option value="other">
                        <button type="button" class="btn btn-primary btn-lg">Other</button>
                    </option>
                </form>
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
    render(){
        return(
            <div class = "payment-option-bottom">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name = "checkoutTip" component = {this.renderInput}>
                    
                    </Field>   
                </form>
            </div>
    
        )
    }
}
const validate = (formValues) => {
    const error = {}
    if(!formValues.title){
        error.title = 'You must have a title'
    }

    if(!formValues.description){
        error.description = 'You must have a description'
    }

    return error
}

let formWrapped = reduxForm({
    form: 'tipForm'
})(Tip)

let mapStateToProps = (state) => {
    return ({
        checkoutTip: state.form.checkoutTip
    })
}

export default connect(mapStateToProps, {})(formWrapped)