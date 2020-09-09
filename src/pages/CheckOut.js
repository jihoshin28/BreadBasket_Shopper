import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from '../components/CheckoutItem'

class CheckOut extends React.Component{
    componentDidMount(){
        console.log(this.props.cartItems)
    }

    renderItems(){
        this.props.cartItems.map(item => {
            return <div>
                {/* <CheckoutItem name = {}></CheckoutItem> */}
            </div>
        })
    }

    render(){
        return(
            <div className = "container">
                <h1> Checkout </h1>
                <div> 

                </div>
                <div >
                    <h3>SubTotal: {`$${this.props.cartSubTotal.toFixed(2) }`}</h3>
                    <h3>Delivery: {`$${this.props.cartDelivery.toFixed(2)}`}</h3>
                    <h3>Tip: {`$${this.props.cartTip.toFixed(2)}`}</h3>
                    <h3>Total: {`$${this.props.cartTotal.toFixed(2)}`}</h3>
                </div>

            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return({
        cartItems: state.cart.cart_items,
        cartSubTotal: state.cart.subtotal,
        cartDelivery: state.cart.delivery,
        cartTip: state.cart.tip,
        cartTotal: (state.cart.subtotal + state.cart.delivery + state.cart.tip)
    })
}

export default connect(mapStateToProps, {})(CheckOut)