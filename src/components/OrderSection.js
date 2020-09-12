import React, { Component } from "react"
import {connect} from 'react-redux'
import {cancelOrder, clearOrderItems, getOrderItems} from '../actions'

class OrderSection extends Component {
    componentDidMount(){
        console.log(this.props.history)
    }
    cancelOrder(){
        if(!!this.props.orderItems){
            this.props.clearOrderItems()
        }
            this.props.cancelOrder(this.props.id)
            // this.props.getOrderItems(this.props.id)
            // this.deleteOrderItems(this.props.id)
    }

    // deleteOrderItems= (id) =>{
    //     console.log("delete function", this.props.orderItems)
    // }

    viewOrderItems(){
        this.props.clearOrderItems()
        this.props.history.push(`/view_order_items/${this.props.id}`)
    }

    render() {
        return (
            <div class="orderBox">
                <div class="orderHeader">
                    <h3>Order {this.props.position}</h3>
                </div>

                <div class="orderInfo">
                    <p>
                        Order Cost: {(this.props.total/100).toFixed(2)}$
                    </p>
                    <p>
                        Name of Driver: Bob Clark
                    </p>
                    <p>
                        Grocery Store: {this.props.store}
                    </p>
                </div>
                <div class="orderButtonBox">
                    <button class="detailsButton">
                        View Payment Details
                        </button>
                    <button onClick={() => this.viewOrderItems()} class="detailsButton">
                        View Items
                    </button>
                    <button onClick = {()=> this.cancelOrder()}class="detailsButton">
                        Cancel Order
                    </button>
                </div>

            </div>


        )
    }
}

let mapStateToProps = (state) => {
    return ({
        orderItems: state.order.order_items
    })
}

export default connect(mapStateToProps, {cancelOrder, clearOrderItems, getOrderItems})(OrderSection)