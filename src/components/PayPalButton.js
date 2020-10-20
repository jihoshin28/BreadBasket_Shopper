import { data } from 'jquery'
import React from 'react'
import {PayPalButton} from 'react-paypal-button-v2'

class PaypalButton extends React.Component {
    render(){
        return(
            <PayPalButton
                amount = {this.props.amount}
                onSuccess = {(details, data) => {
                    alert(details)
                    return fetch("/paypal-transaction-complete", {
                        method: 'post',
                        body: JSON.stringify({
                            orderId: data.orderID
                        })
                    })
                }}
                options ={{
                    clientId: "Aef4WiQOrgTXuMCJ7yrTuJ75h1TfnhbaWg_XatCXfSeVb7WBCGtE0EE0Uyid5JN5NYPn27vIHT6IE8iR"
                }}
            ></PayPalButton>
        )
    }
}

export default PaypalButton