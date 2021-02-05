import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Substitute extends React.Component {
    submitForm = (formValues) => {
        console.log(formValues)
    }
    render(){
        return(
            <div class = "payment-option-bottom">
                <form onChange = {this.props.handleSubmit(this.submitForm)}>
                    <Field name = "contact" component = "select">
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </Field>   
                </form>
            </div>
    
        )
    }
}

let formWrapped = reduxForm({
    form: 'tipForm'
})(Substitute)

export default formWrapped