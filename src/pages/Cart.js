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
        return(
            <div class = 'container'>
                
                <div class = 'wrapper cart'>
                    <h1>Cart</h1>
                    {cartItems.map(cart_item => {
                        let item_attribute = cart_item.attributes.item
                        return <CartItem cartItemId = {cart_item.id} image = {item_attribute.image} name = {item_attribute.name} count = {cart_item.attributes.quantity_num} price = {item_attribute.price}/>
                    })}
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