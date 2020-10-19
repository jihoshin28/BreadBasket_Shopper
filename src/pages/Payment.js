import React from 'react'
import {connect} from 'react-redux'

import PaymentForm from '../components/PaymentForm'
import StripeCheckout from 'react-stripe-checkout'
import {PayPaButton} from 'react-paypal-button-v2'
import { processOrder } from '../actions'

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

    onPaymentChange = (e) => {
        console.log(e.target.value)
    }

    renderItems(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        console.log(cartItems)
        return cartItems.map(item => {
            console.log(item.attributes)
            return <div class = "row checkout-item">
                        <div class = "card" style = {{height: "10%", width: "10%"}}>
                            <img src={item.attributes.item.image} style={{ height: "100%" }} class="card-img-top" alt="..." />
                        </div>
                    <h3>{item.attributes.item.name}</h3>
                    <h3>
                        {item.attributes.quantity_num}
                    </h3>
                    <h3>{`$${(item.attributes.item.price * .01 * item.attributes.quantity_num).toFixed(2)}`}</h3>
                </div>
            
        }) 
    }


    render(){
        return(
            
                <div >
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
                                        <form onChange = {this.onPaymentChange}>
                                            <div class="payment-method">
                                                <div>
                                                    <input type = "radio" id = "stripe" value = "stripe" name = "payment-method"> 
                                                    </input>
                                                    <label for="stripe"><h4>Card Payment</h4></label>
                                                </div>
                                                <img class = 'payment-icon' src={process.env.PUBLIC_URL + '/stripeIcon.png'} /> 
                                            </div>
                                            <div class="payment-method">
                                                <div>
                                                    <input type="radio" id = "paypal" value = "paypal" name = "payment-method">
                                                    </input>
                                                    <label for="paypal"><h4>Paypal</h4></label>

                                                </div>
                                                <img class='payment-icon' src={process.env.PUBLIC_URL + '/paypalIcon.svg.png'} />
                                            </div>
                                            <div class="payment-method">
                                                <div>
                                                    <input type="radio" id="venmo" value="venmo" name="payment-method">
                                                    </input>
                                                    <label for="venmo"><h4>Venmo</h4></label>

                                                </div>
                                                <img class='payment-icon' src={process.env.PUBLIC_URL + '/venmoIcon.png'} />
                                            </div>

                                        </form>
                                        <div class="payment-divider">

                                        </div>
                                        <div class = "payment-details">
                                            <h3>SubTotal: {`$${(this.props.orderSubTotal / 100).toFixed(2)}`}</h3>
                                            <h3>Delivery: {`$${(this.props.orderPayment / 100).toFixed(2)}`}</h3>
                                            <h3>Tip: {`$${(this.props.orderTip / 100).toFixed(2)}`}</h3>
                                            <div class="payment-divider">

                                            </div>
                                            <h3>Total: {`$${(this.props.orderTotal / 100).toFixed(2)}`}</h3>
                                        <button class='payment-button'>Pay ${(this.props.orderTotal * .01).toFixed(2)}</button> 
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