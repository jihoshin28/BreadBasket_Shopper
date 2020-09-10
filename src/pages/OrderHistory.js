import React, { Component } from 'react'
import OrderHistorySection from '../components/OrderHistorySection'

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
                    return <OrderHistorySection order = {order} />
                })}
                
            </div>

        )
    }
}

export default OrderHistory
