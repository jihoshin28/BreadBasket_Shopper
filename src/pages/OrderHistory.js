import React, { Component } from 'react'
import OrderHistorySection from '../components/OrderHistorySection'
import { connect } from 'react-redux'
import MapContainer from '../components/MapContainer'


export class OrderHistory extends Component {
    componentDidMount(){
        console.log(process.env)
        // this.props.getCompletedOrders(this.props.shopperId)
    }

    render() {
        
        let orders = [1, 2, 3, 4, 5]
        // this.props.completedOrders.map
        return (
            <div class = "container">
                <h1>Order History</h1>

                <h3>*Currently under construction!!*</h3>
                {orders.map(order => {
                    return <OrderHistorySection history={this.props.history} order = {order} />
                })}                
            </div>
        )
    }
}

let mapStateToProps = state => {
    return({
        shopperId: state.auth.currentShopper.id,
        stores: state.stores.storesList,
        completedOrders: state.order.completed_orders
    })
}

export default connect(mapStateToProps)(OrderHistory)
