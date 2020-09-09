import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from '../components/CheckoutItem'
import {placeOrder} from '../actions'

class CheckOut extends React.Component{
    componentDidMount(){
        console.log(this.props.cartTip)
        console.log(this.props.cartTotal)
        console.log(this.props.cartDelivery)
        console.log(this.props.storeId)
        console.log(this.props.shopperId)
    }
    placeOrder = () => {
        let orderInfo = {
            payment: this.props.cartDelivery, 
            tip: this.props.cartTip,
            total: this.props.cartTotal,
            store_id: this.props.storeId,
            shopper_id: this.props.shopperId,
            status: 'active'
        }
        this.props.placeOrder(orderInfo)
        this.props.history.push('/')

    }

    renderItems(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        return cartItems.map(item => {
            let attributes = item.attributes
            console.log(attributes)
            return (
                <CheckoutItem price = {attributes.item.price} image = {attributes.item.image} count = {attributes.quantity_num} units = {attributes.item.quantity_unit} name = {attributes.item.name}></CheckoutItem>
            )
        })
    }

    render(){
        return(
            <div className = "container">
                <h1> Checkout </h1>
                <div> 
                    {this.renderItems()}
                </div>
                <div >
                    <h3>SubTotal: {`$${this.props.cartSubTotal.toFixed(2) }`}</h3>
                    <h3>Delivery: {`$${this.props.cartDelivery.toFixed(2)}`}</h3>
                    <h3>Tip: {`$${this.props.cartTip.toFixed(2)}`}</h3>
                    <h3>Total: {`$${this.props.cartTotal.toFixed(2)}`}</h3>
                </div>
                <button onClick ={() => this.placeOrder()}>Place Order</button>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return({
        shopperId: state.auth.currentShopper.shopper_info.id,
        storeId: state.stores.selectedStore.id,
        cartItems: state.cart.cart_items,
        cartSubTotal: state.cart.subtotal,
        cartDelivery: state.cart.delivery,
        cartTip: state.cart.tip,
        cartTotal: (state.cart.subtotal + state.cart.delivery + state.cart.tip)
    })
}

export default connect(mapStateToProps, {placeOrder})(CheckOut)