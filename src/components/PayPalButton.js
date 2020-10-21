import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

class PaypalButton extends React.Component {
    render(){
        return(
            <PayPalButton
                amount = ".01"
                onSuccess = {(details, data) => {
                    alert(details)
                    return fetch("/paypal-transaction-complete", {
                        method: 'post',
                        body: JSON.stringify({
                            orderId: data.orderID
                        })
                    })
                }}
                
            ></PayPalButton>
        )
    }
}

export default PaypalButton