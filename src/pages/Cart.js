import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCart, removeCartItem, checkOut} from '../actions'
import CartItem from '../components/CartItem'
import { isEmpty } from 'lodash'
import {reduxForm, Field } from 'redux-form'

class Cart extends Component{
    componentDidMount(){
        this.props.getCart(this.props.cart_id)
    }

    componentDidUpdate(){
        console.log(this.props.tip)
    }

    renderCart(){ 
        if (!!this.props.cart_items || this.props.cart_items === {}){
            let keys = Object.keys(this.props.cart_items)
            let cartItems = keys.map(key => this.props.cart_items[key])
            return (
                    cartItems.map(cart_item => {
                        let item_attribute = cart_item.attributes.item
                        return <CartItem cartItemId={cart_item.id} image={item_attribute.image} name={item_attribute.name} count={cart_item.attributes.quantity_num} price={item_attribute.price} />
                    })
            )
        }
    }

    renderCartTotal(){
        let subtotal = 0
        if (!this.props.cart_items || this.props.cart_items === {}){
            subtotal = 0
        } else {
            let keys = Object.keys(this.props.cart_items)
            let cartItems = keys.map(key => this.props.cart_items[key])
            console.log(cartItems)
            subtotal = cartItems.reduce((sum, current) => {
                return sum + (current.attributes.quantity_num * (current.attributes.item.price * .01))
            }, 0)
        }
        function renderSelect({input, label}){
            return(
                <div>
                    <span>{label}</span>
                    <select {...input} id="tip">
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </select>
                </div>
            )
        }
        let delivery = subtotal * .14
        let total = subtotal + delivery
        let cartTotal = {
            subtotal: subtotal,
            delivery: delivery,
            // tip: tip
        }
        let submitForm = (formValues) => {
            let cartTotal = {
                subtotal: subtotal,
                delivery: delivery,
                tip: formValues.tip * .01 * (subtotal + delivery)
            }
            console.log(cartTotal)
            
        }
    
            return (
            <div>
                <form onSubmit={this.props.handleSubmit(submitForm)}>
                    <div>
                        <h2>
                            {`$${subtotal.toFixed(2)}`}
                        </h2>
                        <h2>
                            {`$${delivery.toFixed(2)}`}
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

    checkOut(cartTotal){
        
        if (isEmpty(this.props.cart_items)) {
            alert('Your cart is empty!')
        } else {
            console.log(cartTotal)
            // this.props.checkOut(cartTotal)
            this.props.history.push('/checkout')
        }
        
    }

    render() {
        return(
            <div class = 'container'>
                
                <div class = 'wrapper cart'>
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
        state: state,
        tip: state.form.checkoutForm,
        cart_id: state.cart.cart_id,
        cart_items: state.cart.cart_items
    })
}

export default connect(mapStateToProps, {getCart, removeCartItem, checkOut})(formWrapped)