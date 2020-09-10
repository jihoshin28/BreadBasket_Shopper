import React from 'react'
import { connect } from 'react-redux'
import { getActiveOrders } from '../actions'
import OrderSection from '../components/OrderSection'

class CurrentOrder extends React.Component {
    componentDidMount(){
        this.props.getActiveOrders(this.props.shopperId)
    }
    renderOrders = () => {
        return this.props.activeOrders.map((order, id) => {
            let attributes = order.attributes
            return (
                <OrderSection 
                    id = {id + 1} 
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