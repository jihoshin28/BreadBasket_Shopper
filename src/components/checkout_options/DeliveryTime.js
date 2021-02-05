import React from 'react'
import { Field, reduxForm } from 'redux-form'

class DeliveryTime extends React.Component {
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
})(DeliveryTime)

export default formWrapped