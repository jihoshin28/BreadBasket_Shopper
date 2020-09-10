import React from 'react'
import { connect } from 'react-redux'
import OrderItem from '../components/OrderItem'


class ViewOrderItems extends React.Component{
    renderItems() {
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        return cartItems.map(item => {
            let attributes = item.attributes
            return (
                <OrderItem price={attributes.item.price} image={attributes.item.image} count={attributes.quantity_num} units={attributes.item.quantity_unit} name={attributes.item.name}/>
            )
        })
    }
    render(){
        return(
            <div>
                <h1>Order Items</h1>
                {this.renderItems()}
            </div>
        )
    }

}

let mapStateToProps = state => {
    return({
        orderItems: state.order
    })
}

export default connect(null)(ViewOrderItems)