import React from 'react'
import { connect } from 'react-redux'
import { getActiveOrders } from '../actions'
import OrderSection from '../components/OrderSection'

class CurrentOrder extends React.Component {
    
    componentDidMount(){
        console.log(this.props.history)
    }

    renderOrders = () => {
        return this.props.activeOrders.map((order, id) => {
            let attributes = order.attributes
            return (
                <OrderSection 
                    history = {this.props.history}
                    position = {id + 1} 
                    id = {order.id}
                    store = {this.props.stores[attributes.store_id - 1].attributes.name}
                    total = {attributes.total}
                />
            )   
        })
    }

    render(){
        return(
            <div className = "container">
                <h1>Current Orders</h1>
                <div>
                    {this.renderOrders()}
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return ({
        shopperId: state.auth.currentShopper.id,
        stores: state.stores.storesList,
        activeOrders: state.order.active_orders
    })
}

export default connect(mapStateToProps, {getActiveOrders})(CurrentOrder)