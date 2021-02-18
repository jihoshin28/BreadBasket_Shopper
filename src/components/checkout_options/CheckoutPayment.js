import React from 'react' 
import { connect } from 'react-redux'
import {selectOrderPayment} from '../../actions'
import CheckoutRowButton from '../buttons/CheckoutRowButton'

class CheckoutPayment extends React.Component {


    render(){
        return(
            <div className = "ui container">
                <h4>
                    Select a Payment Option:
                </h4>
                <div className = "button-options-row">
                    <CheckoutRowButton selectOption = {this.props.selectOrderPayment} value = "stripe"/>
                    <CheckoutRowButton selectOption = {this.props.selectOrderPayment} value = "paypal"/>
                </div>
            </div>
        )
    }
}

export default connect(null, {selectOrderPayment})(CheckoutPayment)
