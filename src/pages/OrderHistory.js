import React, { Component } from 'react'
import OrderHistoryItem from '../components/OrderHistoryItem'

export class OrderHistory extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    
    render() {
        let orders = [1, 2, 3, 4, 5]
        return (
            <div class = "container">
                <h1>Order History</h1>
                {orders.map(order => {
                    return <OrderHistoryItem order = {order} />
                })}
                
            </div>

        )
    }
}

export default OrderHistory
