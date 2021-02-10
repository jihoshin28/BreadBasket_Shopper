import React from 'react' 
import { connect } from 'react-redux'
import {selectOrderPayment} from '../../actions'

class CheckoutPayment extends React.Component {


    render(){
        return(
            <div className = "ui container">
                <h4>
                    Select a Payment Option:
                </h4>
                <div className = "button-options-row">
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.props.selectOrderPayment(e)} style = {{width: "100%"}} value = 'stripe'>Stripe</button> 
                    </div>  
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.props.selectOrderPayment(e)} style = {{width: "100%"}} value = 'paypal'>Paypal</button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {selectOrderPayment})(CheckoutPayment)
