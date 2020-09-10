import React, { Component } from "react"

class OrderItem extends Component {
    render() {
        return (


            <div class="orderBox">
                <div class="orderHeader">
                    <h3>Order {this.props.id}</h3>
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
                    <button class="detailsButton">
                        View Items
                        </button>
                </div>

            </div>


        )
    }
}

export default OrderItem