import React from 'react'
import {connect} from 'react-redux'

import PaymentForm from '../components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { processOrder } from '../actions'

const stripePromise = loadStripe('pk_test_51HN5XFKYkELgOBXmFpEJqnw7WynOS5irzHdnuse7CMysCArWYZPwclIdO73m8Ot8CVNn6pQANPfuPkbDmLk3HRdD00ss20lGUO')

class Payment extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }

    placeOrder = async () => {
        //:order_id, :item_id, :quantity_num, :status
        this.setState({
            loading: true
        })

        await this.processOrder()
        // await this.changeOrderStatus()
        // await this.dropCart()
        // this.props.checkoutOrder()
        window.history.pushState({}, '', '/payment')
        window.history.go()
    }

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
                        <div class = "row">
                        
                            <div class = 'col-10 payment-box'>
                                <h2>Payment</h2>
                                <Elements stripe={stripePromise}>
                                    <PaymentForm />
                                </Elements>
                            </div>
                        </div>
                        <div className = "row">
                            <div class= "col-7 payment-box">
                                <h2>Items</h2>
                                        
                            </div>
                            <div class="col-3 payment-total">
                                <h2>Total</h2>
                                <button >Pay</button>
                            </div>
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

let mapStateToProps = state => {
    return({
        cart_id: state.cart.cart_id,
        currentOrderId: state.order.current_order_id,
        cartItems: state.cart.cart_items,
        orderPayment: state.order.payment,
        orderTip: state.order.tip,
        orderTotal: state.order.total,
        orderSubTotal: state.order.subtotal
    })
}

export default connect(mapStateToProps, {processOrder})(Payment)