import React from 'react'
import PaymentForm from '../components/PaymentForm'

class Payment extends React.Component {
    render(){
        return(
            <div className="stripe-box">
                <h2>
                    Stripe Payment
                                </h2>
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            </div>
        )
    }
}

export default Payment