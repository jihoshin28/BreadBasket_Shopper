import React from 'react'
import {connect} from 'react-redux'
import {clearItem} from '../actions'

const OrderItem = props => {

    let itemDetailsNav = () => {
        props.clearItem()
        props.history.push(`/item_details/${props.item_id}`)
    }
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
                <button onClick={() =>  itemDetailsNav() }>Item Details</button>
            </div>
        </div>
    )
}

export default connect(null, {clearItem})(OrderItem)