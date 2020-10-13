import React from 'react'
import {CardNumberElement, CardExpiryElement, CardCvcElement, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'

const CARD_ELEMENT_OPTIONS = {
    
        style: {
                
            
            base: {
                padding: '10px 12px',
                color: '#32325d',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontSmoothing: 'antialiased',
                backgroundColor: 'gray',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                },
            },
            invalid: {
                color: '#fa755a',
            }
        }
};

class PaymentElement extends React.Component {
    handleSubmit = async(event) => {
        event.preventDefault()
        const { stripe, elements } = this.props
        if(!stripe || !elements){
            return
        }
        
        const cardElement = elements.getElement(CardElement)
        const cardNumberElement = elements.getElement(CardNumberElement)
        const cardExpiryElement = elements.getElement(CardExpiryElement)
        const cardCvcElement = elements.getElement(CardNumberElement)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
            // total: {
            //     label: `Order Number ${this.props.currentOrderId}`,
            //     amount: this.props.orderTotal
            // }
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


                <div class="form-group">
                    <label for = "card-number">Card Number</label>
                    <CardElement options={CARD_ELEMENT_OPTIONS} id="card-number" class= "payment-input"/>
                </div>
                {/* <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="card-expiry">Expiration Date</label>
                        <CardExpiryElement options={CARD_ELEMENT_OPTIONS} id = "card-expiry" class = "payment-input" />
                    </div>
                        <div class="form-group col-md-6">
                            <label for="card-cvc">CVC</label>
                            <CardCvcElement class = "payment-element" options={CARD_ELEMENT_OPTIONS} id="card-cvc" class= "payment-input" />
                        </div>
                </div> */}
                <button type='submit' disabled={!stripe}>
                    Pay
                </button>
            </form>
            // <form onSubmit = {this.handleSubmit}>
            //     <CardElement options={{
            //         style: {
            //             base: {
            //                 fontSize: '16px',
            //                 color: '#424770',
            //                 '::placeholder': {
            //                     color: '#aab7c4',
            //                 },
            //                 padding: '50px'
            //             },
            //             invalid: {
            //                 color: '#9e2146',
            //             },
            //         },
            //     }}/>
            //     <button type = 'submit' disabled = {!stripe}>
            //         Pay
            //     </button>
            // </form>
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