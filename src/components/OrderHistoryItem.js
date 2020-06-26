import React, {Component} from "react"

class OrderHistoryItem extends Component {
    render(){
        return (
          
                
                <div class = "orderBox">
                    <div class = "orderHeader">
                        <h3>Order {this.props.order}</h3>
                    </div>
                    
                    <div class = "orderInfo">
                        <p>
                            Order Cost: {this.props.order}0$
                        </p>
                        <p>
                            Name of Driver: Bob Clark
                        </p>
                        <p>
                            Grocery Store: Safeway
                        </p>
                    </div> 
                    <div class = "orderButtonBox">
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

export default OrderHistoryItem