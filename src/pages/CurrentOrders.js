import React from 'react'
import { connect } from 'react-redux'
import OrderItem from '../components/OrderItem'

class CurrentOrder extends React.Component {
    componentDidMount(){
        console.log(this.props.activeOrders)
    }
    renderOrders = () => {
        return this.props.activeOrders.map((order, id) => {
            let attributes = order.attributes
            return (
                <OrderItem 
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
        stores: state.stores.storesList,
        activeOrders: state.order.active_orders
    })
}

export default connect(mapStateToProps, {})(CurrentOrder)