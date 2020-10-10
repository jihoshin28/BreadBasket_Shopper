import React from 'react'
import { connect } from 'react-redux'

import OrderItem from '../components/OrderItem'
import { addOrderItem, removeCartItem, dropCart, checkoutOrder, changeOrderStatus} from '../actions'

class CheckOut extends React.Component{
    componentDidMount(){
        console.log(this.props.currentOrderId)
        console.log(this.props.history)
        console.log(this.props.checkoutOrder)
        console.log(this.props.cart_id)

    }

    renderItems(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        return cartItems.map(item => {
            let attributes = item.attributes
            return (
                <OrderItem history = {this.props.history} price = {attributes.item.price} image = {attributes.item.image} count = {attributes.quantity_num} units = {attributes.item.quantity_unit} name = {attributes.item.name} item_id= {attributes.item.id}/>
            )
        })
    }

    render(){
        return(
            <div>
                <div className = "container">
                    <h1> Checkout </h1>
                    <div> 
                        {this.renderItems()}
                    </div>
                    <div >
                        <h3>SubTotal: {`$${(this.props.orderSubTotal/100).toFixed(2)}`}</h3>
                        <h3>Delivery: {`$${(this.props.orderPayment/100).toFixed(2)}`}</h3>
                        <h3>Tip: {`$${(this.props.orderTip/100).toFixed(2)}`}</h3>
                        <h3>Total: {`$${(this.props.orderTotal/100).toFixed(2)}`}</h3>
                    </div>
                    <button onClick ={() => this.placeOrder()}>Place Order</button>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return({
        
        shopperId: state.auth.currentShopper.shopper_info.id,
        storeId: state.stores.selectedStore.id,
        cart_id: state.cart.cart_id,
        cartItems: state.cart.cart_items,
        orderPayment: state.order.payment,
        orderTip: state.order.tip,
        orderTotal: state.order.total,
        orderSubTotal: state.order.subtotal
    })
}


export default connect(mapStateToProps, { addOrderItem, removeCartItem, dropCart, checkoutOrder, changeOrderStatus})(CheckOut)