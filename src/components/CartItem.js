import React, {Component} from 'react'

class CartItem extends Component {

    componentDidMount(){

    }

    changeCount = (event) => {
        if(event.target.innerHTML === '+'){
            this.setState({
                count: this.state.count + 1,
                price: (this.props.price * (this.state.count + 1)).toFixed(2)
            })
        } else if(event.target.innerHTML === '-') {
            if(this.state.count > 0){
                this.setState({
                    count: this.state.count - 1,
                    price: (this.props.price * (this.state.count - 1)).toFixed(2)
                })
            }
        }
    }
    render(){
        
        return(
            <div class = "row cartItem">
                <div>
                    <h3>{this.props.name}</h3>
                    <img  height = "200px" src={this.props.image}/>
                </div>
                <div>
                    <h3>Price per unit: ${this.props.price.toFixed(2)}</h3>
                    <div>
                        <h3>Count: {this.props.count}</h3>
                        <span>
                            <button onClick= {this.changeCount}>
                                +
                            </button>
                            <button onClick = {this.changeCount}>
                                -
                            </button>
                        </span>
                        
                    </div>
                    <h3>Total: ${this.props.price} </h3>
                </div>
                <div>
                    <button>Remove Item</button>
                    <button>Item Details</button>
                </div>
            </div>
        )
    }
}

export default CartItem