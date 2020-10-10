import React from 'react'
import {CardElement, ElementsConsumer} from '@stripe/react-stripe-js'

class PaymentElement extends React.Component {
    handleSubmit = async(event) => {
        event.preventDefault()
        const { stripe, elements } = this.props
        if(!stripe || !elements){
            return
        }

        const cardElement = elements.getElement(CardElement)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });

        if(error) {
            console.log('error', error)
        } else {
            console.log('payment', paymentMethod)
        }
    }
    render(){
        const {stripe} = this.props
        return(
            <form onSubmit = {this.handleSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            padding: '50px'
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}/>
                <button type = 'submit' disabled = {!stripe}>
                    Checkout
                </button>
            </form>
        )

    }
}

const PaymentForm = () => {
    return(
        <ElementsConsumer>
            {({elements, stripe}) => (
                <PaymentElement elements={elements} stripe = {stripe}/>
            )}
        </ElementsConsumer>
    )
}

export default PaymentForm