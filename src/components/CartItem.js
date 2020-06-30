import React, {Component} from 'react'

class CartItem extends Component {
    render(){
        return(
            <div class = "row cartItem">
                <div>
                    <h3>{this.props.name}</h3>
                    <img width = "200px" src={this.props.image}/>
                    
                </div>
                <div>
                    <h3>Price: $13.40</h3>
                    <h3></h3>
                </div>
            </div>
        )
    }
}

export default CartItem