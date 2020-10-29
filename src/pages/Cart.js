import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCart, removeCartItem, preOrder, updatePreOrder} from '../actions'
import CartItem from '../components/CartItem'
import { isEmpty } from 'lodash'
import {reduxForm, Field } from 'redux-form'

class Cart extends Component{

    cartItemsArray = (cartItems) => {
        let keys = Object.keys(cartItems)
        return keys.map(key => this.props.cart_items[key])
    }

    renderCart(){ 
        if (!isEmpty(this.props.cart_items)){
            let cartItems = this.cartItemsArray(this.props.cart_items)
            return (
                cartItems.map(cart_item => {
                    let item_attribute = cart_item.attributes.item
                    return <CartItem cartItemId={cart_item.id} image={item_attribute.image} name={item_attribute.name} count={cart_item.attributes.quantity_num} price={item_attribute.price} history = {this.props.history} item_id={item_attribute.id} unit = {item_attribute.quantity_unit}/>
                })
            )
        }
    }

    renderCartTotal(){
        let subtotal = 0
        if (!!isEmpty(this.props.cart_items)){
            subtotal = 0
        } else {
            let cartItems = this.cartItemsArray(this.props.cart_items)
            console.log(cartItems)
            subtotal = cartItems.reduce((sum, current) => {
                return sum + (current.attributes.quantity_num * (current.attributes.item.price * .01))
            }, 0)
        }
        
        let payment = subtotal * .14
        let total = subtotal + payment

        let submitForm = (formValues) => {
            if(!!isEmpty(this.props.cart_items)){
                alert('Your cart is empty!')
            } else {
                let tip = !!formValues.tip ? formValues.tip * .01 * (subtotal + payment) : 0
                let orderInfo = {
                    payment: (payment * 100).toFixed(0),
                    tip: (tip * 100).toFixed(0),
                    subtotal: (subtotal * 100).toFixed(0),
                    total: (total * 100 + tip * 100).toFixed(0),
                    store_id: this.props.storeId,
                    shopper_id: this.props.shopperId,
                    status: 'pending'
                }
                    if(!this.props.currentOrderId){
                        this.props.preOrder(orderInfo)
                    }else {
                        this.props.updatePreOrder(this.props.currentOrderId, orderInfo)
                    }              
                this.props.history.push('/checkout')
            }
        }
    
            return (
            <div>
                <form onSubmit={this.props.handleSubmit(submitForm)}>
                    <div>
                        <h2>
                            {`$${subtotal.toFixed(2)}`}
                        </h2>
                        <h2>
                            {`$${payment.toFixed(2)}`}
                        </h2>
                        <h2>
                            <span>
                                Tip(% of total order)
                            </span>
                            <span>
                                <Field name = "tip" component = "select">
                                    <option value="0">0%</option>
                                    <option value="5">5%</option>
                                    <option value="10">10%</option>
                                    <option value="15">15%</option>
                                    <option value="20">20%</option>
                                </Field>   
                            </span>
                            {/* {`$${tip}`} */}
                        </h2>
                        <h2>
                            {`$${total.toFixed(2)}`}
                        </h2>
                            
                            <button type="submit">
                                Checkout
                    </button>
                    </div>
                    
                    
                </form>
            </div>
            )
    }

    render() {
        return(
            <div class = 'container'>
                
                <div class =  'cart'>
                    <h1>Cart</h1>
                    {this.renderCart()}
                    <div class = "row cartItem total">
                        <div>
                            <h3>
                                SubTotal: 
                            </h3>
                            <h3>
                                Delivery: 
                            </h3>
                            <h3>
                                Tip:
                            </h3>
                            <h3>
                                Total:
                            </h3>
                            <br></br>
                        </div>
                        <div>
                            <h3>
                                ................................................
                            </h3>
                            <h3>
                                ................................................
                            </h3>
                            <h3>
                                ................................................
                            </h3>
                            <h3>
                                ................................................
                            </h3>
                            <br></br>
                        </div>

                        {this.renderCartTotal()}
                    </div>
                    
                </div>
                
            </div> 
        )
    }
}

let formWrapped = reduxForm({
    form: 'checkoutForm'
})(Cart)


const mapStateToProps = state => {
    return({
        shopperId: state.auth.currentShopper.id,
        storeId: state.stores.selectedStore.id,
        currentOrderId: state.order.current_order_id,
        cart_id: state.cart.cart_id,
        cart_items: state.cart.cart_items,
        item_ids: state.cart.item_ids
    })
}

export default connect(mapStateToProps, {getCart, removeCartItem, preOrder, updatePreOrder})(formWrapped)