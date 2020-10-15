import React from 'react'
import {connect} from 'react-redux'

import PaymentForm from '../components/PaymentForm'
import StripeCheckout from 'react-stripe-checkout'
import { processOrder } from '../actions'
import OrderItem from '..'

class Payment extends React.Component {
    componentDidMount(){
        console.log(process.env.STRIPE_TEST_KEY)
        console.log(this.props.cartItems)
    }

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

    onToken = () => {

    }

    renderItems(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        console.log(cartItems)
        return cartItems.map(item => {
            console.log(item.attributes)
            return <div class = "row checkout-item">
                        <div class = "card" style = {{height: "20%", width: "20%"}}>
                            <img src={item.attributes.item.image} style={{ height: "100%" }} class="card-img-top" alt="..." />
                        </div>
                    <h3>{item.attributes.item.name}</h3>
                    <div class = "row" >
                        <h3>+</h3>
                        <h3>
                            {item.attributes.quantity_num}
                        </h3>
                        <h3>-</h3>
                    </div>
                    <h3>{`$${(item.attributes.item.price * .01 * item.attributes.quantity_num).toFixed(2)}`}</h3>
                </div>
            
        }) 
    }


    render(){
        return(
            
                <div>
                    {!this.state.loading ? 
                    <div class="wrapper"> 
                            <div className = "row payment-box">
                                <div class= "col-6 payment-items">
                                    <h1 class = "payment-header">Checkout</h1>
                                    <div class = "row payment-labels">
                                        <p>Items</p>
                                        <p>Quantity</p>
                                        <p>Price</p>
                                    </div>
                                    <div class = "payment-divider">

                                    </div>
                                    <div class = "checkout-items">
                                        {this.renderItems()}
                                    </div> 
                                </div>
                            
                                <div class="col-6 payment-total">
                                    <div>
                                            <div class="payment-item">
                                                <input type = "radio" id = "stripe" value = "stripe" checked> 
                                                </input>
                                                <label for = "stripe"> Stripe Payment</label>
                                                <StripeCheckout
                                                    token={this.onToken}
                                                    stripeKey="pk_test_51HN5XFKYkELgOBXmFpEJqnw7WynOS5irzHdnuse7CMysCArWYZPwclIdO73m8Ot8CVNn6pQANPfuPkbDmLk3HRdD00ss20lGUO"
                                                >
                                                </StripeCheckout>
                                            </div>
                                    </div>
                                </div>

                            </div>
                            <div class="payment-bg-1">
                                
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