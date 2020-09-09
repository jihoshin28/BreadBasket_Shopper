import React from 'react'

const CheckoutItem = props => {
    return (
        <div className = 'row checkoutItem'> 
            <div>
                <h3>{this.props.name}</h3>
                <img height="200px" src={this.props.image} />
            </div>
        </div>
    )
}

export default CheckoutItem