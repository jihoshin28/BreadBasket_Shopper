import React from 'react'

const OrderItem = props => {
    return (
        <div className = 'row orderItem'> 
            <div>
                <h3>{props.name}</h3>
                <img height="200px" src={props.image} />
            </div>
            <div>
                <h3>
                    Quantity: {props.count} {props.units}
                </h3>
                <h3>
                    Price: ${(props.price * props.count * .01).toFixed(2)}
                </h3>
            </div>
        </div>
    )
}

export default OrderItem