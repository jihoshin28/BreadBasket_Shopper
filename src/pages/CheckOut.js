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
    
    processOrder = () => {
            

        return new Promise ((resolve) => {
            let keys = Object.keys(this.props.cartItems)
            let cartItems = keys.map(key => this.props.cartItems[key])
            cartItems.forEach((cartItem) => {
                let orderItemInfo = {
                    order_id: this.props.currentOrderId,
                    item_id: cartItem.attributes.item_id,
                    quantity_num: cartItem.attributes.quantity_num, 
                    status: "pending"
                }
                console.log(orderItemInfo)
                this.props.addOrderItem(orderItemInfo)
            })    
        this.props.dropCart(this.props.cart_id)
        this.props.changeOrderStatus(this.props.currentOrderId, { status: "active" })
        this.props.checkoutOrder()
        resolve('1')
        })
    }

        
    placeOrder = async() => {
        //:order_id, :item_id, :quantity_num, :status

        await this.processOrder()

        alert("Order has been placed!")
        window.history.pushState({}, '', '/orderpage')
        window.history.go()
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

        )
    }
}


const mapStateToProps = (state) => {
    return({
        currentOrderId: state.order.current_order_id,
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