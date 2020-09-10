import React from 'react'
import { connect } from 'react-redux'

class CurrentOrder extends React.Component {
    componentDidMount(){
        console.log(this.props.activeOrders)
        console.log(this.props.activeOrders.map(order => order.id))
    }

    renderOrders = () => {
        return this.props.activeOrders.map(order => {
            return (
                <h1> {order}</h1>
            )   
        })
    }

    render(){
        return(
            <div className = "container">
                <h1>Current Order</h1>
                <div>
                    {this.renderOrders()}
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return ({
        activeOrders: state.order.active_order_ids
    })
}

export default connect(mapStateToProps, {})(CurrentOrder)