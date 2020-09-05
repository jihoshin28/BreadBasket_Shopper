import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCart, removeCartItem } from '../actions'
import CartItem from '../components/CartItem'

class Cart extends Component{
    componentDidMount(){
        this.props.getCart(this.props.cart_id)
        console.log(this.props.cart_items)
    }

    render() {
        let keys = Object.keys(this.props.cart_items)
        let cartItems = keys.map(key=> this.props.cart_items[key])
        console.log(cartItems)
        let subtotal = cartItems.reduce((sum, current) => {
            return sum + (current.attributes.quantity_num * (current.attributes.item.price * .01))
        }, 0)
        let delivery = subtotal * .14
        let total = subtotal + delivery
        console.log(subtotal)
        return(
            <div class = 'container'>
                
                <div class = 'wrapper cart'>
                    <h1>Cart</h1>
                    {cartItems.map(cart_item => {
                        let item_attribute = cart_item.attributes.item
                        return <CartItem cartItemId = {cart_item.id} image = {item_attribute.image} name = {item_attribute.name} count = {cart_item.attributes.quantity_num} price = {item_attribute.price}/>
                    })}
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
                        </div>

                        <div>
                            <h3>
                                {`$${subtotal.toFixed(2)}`}
                            </h3>
                            <h3>
                                {`$${delivery.toFixed(2)}`}
                            </h3>
                            <h3>
                                <span> 
                                    Tip(% of total order)
                                </span>
                                <span>
                                    <select id="cars">
                                        <option value="5">5%</option>
                                        <option value="10">10%</option>
                                        <option value="15">15%</option>
                                        <option value="20">20%</option>
                                    </select>
                                </span>
                                {/* {`$${}`} */}
                            </h3>
                            <h3>
                                {`$${total.toFixed(2)}`}
                            </h3>
                        </div>
                    </div>
                </div>
                
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return({
       cart_id: state.cart.cart_id,
       cart_items: state.cart.cart_items
    })
}

export default connect(mapStateToProps, {getCart, removeCartItem})(Cart)