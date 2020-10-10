import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    
    const handleSubmit = (event) => {
        event.preventDefault()
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
    return(
        <CardElement/>
    )
}

export default CheckoutForm