import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
     
    return(
        <CardElement/>
    )
}

export default CheckoutForm