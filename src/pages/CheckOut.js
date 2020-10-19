import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import OrderItem from '../components/OrderItem'

class CheckOut extends React.Component{
    componentDidMount(){
        console.log(this.props.currentOrderId)
        console.log(this.props.history)
        console.log(this.props.checkoutOrder)
        console.log(this.props.cart_id)

    }

    paymentNav(){
        this.props.history.push('/payment')

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
                    <h1> Order </h1>
                    <div> 
                        {this.renderItems()}
                    </div>
                    <button>
                        <Link to= '/payment'>
                            Checkout
                        </Link>
                    </button>
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


export default connect(mapStateToProps)(CheckOut)