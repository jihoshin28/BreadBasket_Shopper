import React from 'react'
import { connect } from 'react-redux'


class ViewItems extends React.Component{
    renderItems() {
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        return cartItems.map(item => {
            let attributes = item.attributes
            return (
                <CheckoutItem price={attributes.item.price} image={attributes.item.image} count={attributes.quantity_num} units={attributes.item.quantity_unit} name={attributes.item.name}></CheckoutItem>
            )
        })
    }

}

export default connect(null)(ViewItems)