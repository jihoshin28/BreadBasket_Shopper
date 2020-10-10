import React from 'react'
import {CardElement, ElementsConsumer} from '@stripe/react-stripe-js'

class CheckoutElement extends React.Component {
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
            <form onSumbit = {this.handleSubmit}>
                <CardElement/>
                <button type = 'submit' disabled = {!stripe}>
                    Checkout
                </button>
            </form>
        )
    }
}

const CheckoutForm = () => {
    return(
        <ElementsConsumer>
            {({elements, stripe}) => (
                <CheckoutElement elements={elements} stripe = {stripe}/>
            )}
        </ElementsConsumer>
    )
}

export default CheckoutForm