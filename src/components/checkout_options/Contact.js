import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Contact extends React.Component {
    render(){
        return(
            <div class = "payment-option-bottom">
                <h1>Hello</h1>
            </div>
        )
    }
}

let formWrapped = reduxForm({
    form: 'tipForm'
})(Contact)

export default formWrapped
