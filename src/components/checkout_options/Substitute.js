import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {} from '../../actions'

class Substitute extends React.Component {
  
    renderInput({input, label, meta}) {
        console.log(meta)
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
                {/* <form onChange = {this.props.handleSubmit(this.submitForm)}>
                    <Field name = "contact" component = "select">
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </Field>   
                </form> */}
            </div>
        )
    }
}

let formWrapped = reduxForm({
    form: 'substituteForm'
})(Substitute)

let mapStateToProps = (state) => {
    return ({
        
    })
}

export default connect(mapStateToProps, {})(formWrapped)