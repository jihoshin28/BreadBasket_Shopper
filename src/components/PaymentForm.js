import React from 'react'
import {CardNumberElement, CardExpiryElement, CardCvcElement, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'

class PaymentElement extends React.Component {
    handleSubmit = async(event) => {
        event.preventDefault()
        const { stripe, elements } = this.props
        if(!stripe || !elements){
            return
        }

        const cardNumberElement = elements.getElement(CardNumberElement)
        const cardExpiryElement = elements.getElement(CardExpiryElement)
        const cardCvcElement = elements.getElement(CardNumberElement)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumberElement
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
            <form>
                        <div class="form-group">
                            <CardNumberElement class = "form-control"/>
                        </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Expiration Date</label>
                            <CardExpiryElement class = "form-control" />
                    </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">CVC</label>
                            <CardCvcElement class = "form-control" />
                        </div>
                </div>
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