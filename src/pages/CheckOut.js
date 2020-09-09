import React from 'react'
import { connect } from 'react-redux'

class CheckOut extends React.Component{

    render(){
        return(
            <div className = "container">
                <h1> Checkout </h1>
                <div> 

                </div>
                <div >
                    <h3>SubTotal:</h3>
                    <h3>Delivery:</h3>
                    <h3>Tip:</h3>
                    <h3>Total: {`${3}`}</h3>
                </div>

            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return({
        cartItems: state.cart.cart_items,
        cartSubTotal: state.cart.subtotal,
        cartPayment: state.cart.payment,
        cartTip: state.cart.tip
    })
}

export default connect(mapStateToProps, {})(CheckOut)