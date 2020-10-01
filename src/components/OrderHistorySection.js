import React, {Component} from "react"
import {connect} from 'react-redux'
import { clearOrderItems, clearOrder} from '../actions'

class OrderHistoryItem extends Component {

    constructor() {
        super()
        this.ref = React.createRef()

    }

    viewOrderItems() {
        this.props.clearOrderItems()
        this.props.history.push(`/view_order_items/${this.props.id}`)
    }

    paymentDetails() {
        this.props.clearOrder()
        this.props.history.push(`/payment_details/${this.props.id}`)
    }

    initMap(){
        var options = {
            zoom: 8,
            center: {lat: 42.3601, lng: -71.0589}
        }

        var map = new google.maps.Map(this.ref, options)
        var marker = new google.maps.Marker({
            position: {lat: 42, lng: -70},
            map: map
        })
    }
    render(){
        return (
                <div class = "orderBox">
                
                <div ref = {this.ref} id = "map"></div>
                

                <script>
                    {this.initMap()}
                </script>

                    {/* <div class = "orderHeader">
                        <h3>Order {this.props.order}</h3>
                    </div>
                    
                    <div class = "orderInfo">
                        <p>
                        </p>
                            Order Cost: ${this.props.order}0
                        <p>
                            Name of Driver: Bob Clark
                        </p>
                        <p>
                            Grocery Store: Safeway
                        </p>
                    </div> 
                    <div class = "orderButtonBox">
                        <button onClick = {() => this.paymentDetails()} class="detailsButton">
                            View Payment Details
                        </button>
                    <button onClick={() => this.viewOrderItems()} class="detailsButton">
                            View Items
                        </button>
                    </div> */}
                    
                </div>
           
            
        )
    }
}

export default connect(null, { clearOrderItems, clearOrder})(OrderHistoryItem)