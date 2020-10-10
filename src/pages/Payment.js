import React from 'react'
import PaymentForm from '../components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51HN5XFKYkELgOBXmFpEJqnw7WynOS5irzHdnuse7CMysCArWYZPwclIdO73m8Ot8CVNn6pQANPfuPkbDmLk3HRdD00ss20lGUO')

class Payment extends React.Component {

    processOrder = async () => {
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])

        await this.props.processOrder(cartItems, this.props.cart_id, this.props.currentOrderId, { status: "active" })
    }

    render(){
        return(
            <div>
                {!this.state.loading ? 
                    <div className = "container">
                        <div className="stripe-box">
                            <h2>
                                Stripe Payment
                            </h2>
                            <Elements stripe={stripePromise}>
                                <PaymentForm />
                            </Elements>
                        </div>
                    </div>
                    :
                    <div className = "container">
                        <div className = "row" style = {{marginTop: '40%', justifyContent: 'center'}}>
                            <div className = "loaderDiv">
                                <div class = "loader"></div>
                                <h1>Processing Order</h1>
                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default Payment