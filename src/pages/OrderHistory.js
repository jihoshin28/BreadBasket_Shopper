import React, { Component } from 'react'
import OrderSection from '../components/OrderSection'
import { connect } from 'react-redux'
import { getCompletedOrders } from '../actions'


export class OrderHistory extends Component {
    componentDidMount(){
        this.props.getCompletedOrders(this.props.shopperId)
    }

    render() {
        // this.props.completedOrders.map
        return (
            <div class = "App-margin container">
                <h1>Order History</h1>

                {this.props.completedOrders.map((order,id) => {
                    let attributes = order.attributes
                    return (
                        <OrderSection 
                            history = {this.props.history}
                            position = {id + 1} 
                            id = {order.id}
                            paymentText = "Payment Info $"
                            orderButtonTxt = "View Order"
                            store = {this.props.stores[attributes.store_id - 1].attributes.name}
                            total = {attributes.total}
                        />
                    )   
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

export default connect(mapStateToProps, {getCompletedOrders})(OrderHistory)
