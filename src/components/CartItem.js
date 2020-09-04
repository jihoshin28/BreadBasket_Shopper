import React, {Component} from 'react'
import { connect } from 'react-redux'
import {reduxForm, Field } from 'redux-form'
import { cartItemCount } from '../actions'

class CartItem extends Component {

    componentDidMount(){

    }

    removeItem(){

    }

    changeCount(type){
        this.props.cartItemCount(type)
    }

    render(){
        
        return(
            <div class = "row cartItem">
                <div>
                    <h3>{this.props.name}</h3>
                    <img  height = "200px" src={this.props.image}/>
                </div>
                <div>
                    <h3>Price per unit: ${(this.props.price * .01).toFixed(2)}</h3>
                    <div>
                        <h3>Count: {this.props.count}</h3>
                        <span>
                            <button onClick= {this.changeCount('+')}>
                                +
                            </button>
                            <button onClick = {this.changeCount('-')}>
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

export default connect(null, {cartItemCount})(CartItem)