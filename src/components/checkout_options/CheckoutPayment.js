import React from 'react' 
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import {} from '../../actions'

class CheckoutPayment extends React.Component {

    renderInput({input, label, meta}) {
        console.log(input)
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

    render(){
        return(
            <div class = "payment-option-bottom">
                <h1>Hello</h1>
            </div>
        )
    }
}

let formWrapped = reduxForm({
    form: 'checkoutPaymentForm'
})(CheckoutPayment)

let mapStateToProps = (state) => {
    return ({
        
    })
}

export default connect(mapStateToProps, {})(formWrapped)
