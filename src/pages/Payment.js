import React from 'react'
import {connect} from 'react-redux'
import {loadStripe} from '@stripe/stripe-js'
import PayPalButton from '../components/PayPalButton'
import { processOrder, stripePayment, checkoutOrder, dropCart } from '../actions'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY)

class Payment extends React.Component {
    
    componentDidMount(){
        console.log(this.props.history)
        let currentURL = window.location.href.split('/')
        let successParam = currentURL[currentURL.length - 1]
        console.log(currentURL.length) 
        if(successParam === "success"){
            console.log('hello')
            this.placeOrder()
        } else if(successParam === "failure") {
            alert("Payment was unsuccessful!")
            this.setState({error: true})
        }
    }

    constructor() {
        super()
        this.state = {
            error: false,
            loading: false,
            paymentOption: null
        }
    }

    cartItems(){
        let keys = Object.keys(this.props.cartItems)
        return keys.map(key => this.props.cartItems[key])
    }

    placeOrder = async() => {
        //:order_id, :item_id, :quantity_num, :status
        this.setState({
            loading: true
        })
        await this.processOrder()
        this.props.history.push('/orderpage')
        this.props.history.go()
        
    }

    processOrder = async () => {
        this.props.dropCart(this.props.cart_id)
        let cartItems = this.cartItems()
        await this.props.processOrder(cartItems, this.props.cart_id, this.props.currentOrderId, { status: "active" })
        this.props.checkoutOrder()
    }

    stripeCheckout = async(e) => {
        let checkoutItems = this.cartItems()
        let result = checkoutItems.map((checkoutItem) => {
            let item = checkoutItem.attributes.item
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: item.price,
                    },
                    quantity: checkoutItem.attributes.quantity_num,
                }
            })
            
        console.log(result)
        console.log(result)
        await this.props.stripePayment(e, stripePromise, result)
        this.placeOrder()
    }

    onPaymentChange = (e) => {
        this.setState({
            paymentOption: e.target.value
        })
    }

    // [
    //     {
    //         price_data: {
    //             currency: 'usd',
    //             product_data: {
    //                 name: 'Bible',
    //             },
    //             unit_amount: 3000,
    //         },
    //         quantity: 1,
    //     },
    //     {
    //         price_data: {
    //             currency: 'usd',
    //             product_data: {
    //                 name: 'Bible',
    //             },
    //             unit_amount: 3000,
    //         },
    //         quantity: 1,
    //     }
    // ]

    renderItems(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        console.log(cartItems)
        return cartItems.map(item => {
            return <div class = "row checkout-item">
                        <div class = "card col-3" style = {{height: "100%", width: "20%"}}>
                            <img src={item.attributes.item.image} style={{ height: "100%" }} class="card-img-top" alt="..." />
                        </div>
                    <h3 class = "col-2">{item.attributes.item.name}</h3>
                    <h3 class = "col-2">
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
                            <div className = "payment-box">
                                <div class= "payment-options">
                                    <h1 class = "payment-header">Checkout</h1>
                                    <div class = "row payment-labels">
                                        <p class = "col-6">Items</p>
                                        <p class = "col-3">Quantity</p>
                                        <p class = "col-3" >Price</p>
                                    </div>
                                    <div class = "payment-divider">

                                    </div>
                                    <div class = "checkout-items">
                                        {this.renderItems()}                           
                                    </div> 
                                </div>
                            
                                <div class="payment-total">
                                    {/* <form onChange = {this.onPaymentChange}>
                                        <div class="payment-method">
                                            <div>
                                                <input type = "radio" id = "stripe" value = "stripe" name = "payment-method"> 
                                                </input>
                                                <label for="stripe"><h4>Stripe</h4></label>
                                                
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
                                        
                                    </form>
                                    <div class="payment-divider">

                                    </div> */}
                                    <div class = "payment-details">
                                        <h3>SubTotal: {`$${(this.props.orderSubTotal / 100).toFixed(2)}`}</h3>
                                        <h3>Delivery: {`$${(this.props.orderPayment / 100).toFixed(2)}`}</h3>
                                        <h3>Tip: {`$${(this.props.orderTip / 100).toFixed(2)}`}</h3>
                                        <div class="payment-divider"></div>
                                        <h3>Total: {`$${(this.props.orderTotal / 100).toFixed(2)}`}</h3>
                                        
                                        {
                                            this.state.paymentOption === "paypal" ? 
                                            <PayPalButton placeOrder = {this.placeOrder} amount = {(this.props.orderTotal*.01).toFixed(2)}></PayPalButton>
                                            :
                                            <div></div>
                                        }
                                        {
                                            this.state.paymentOption === "stripe" ? 
                                            <button className = 'btn btn-secondary' onClick = {this.placeOrder}>Stripe Checkout</button>
                                            :
                                            <div></div>
                                        }
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
        userEmail: state.auth.currentShopper.email,
        cart_id: state.cart.cart_id,
        currentOrderId: state.order.current_order_id,
        cartItems: state.cart.cart_items,
        orderPayment: state.order.payment,
        orderTip: state.order.tip,
        orderTotal: state.order.total,
        orderSubTotal: state.order.subtotal
    })
}


export default connect(mapStateToProps, {processOrder, stripePayment, checkoutOrder, dropCart })(Payment)