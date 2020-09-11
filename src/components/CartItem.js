import React, {Component} from 'react'
import { connect } from 'react-redux'
import { cartItemCount, removeCartItem, clearItem } from '../actions'


class CartItem extends Component {

    removeItem(cartItemId){
        console.log(cartItemId)
        this.props.removeCartItem(this.props.cartItemId, this.props.item_id)
    }

    changeCount(type){
        let newCount = 0
        if(type === '+'){
            newCount = this.props.count + 1
            
        }
        if(type === '-'){
            if(this.props.count > 1){
                newCount = this.props.count - 1 
            } else{
                newCount = 1
            }
        }
        this.props.cartItemCount(newCount, this.props.cartItemId)
        // this.props.cartItemCount(newCount, this.props.cartItemId)
    }

    itemDetailsNav(){
        this.props.clearItem()
        this.props.history.push(`/item_details/${this.props.item_id}`)
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
                            <button onClick= {() => this.changeCount('+')}>
                                +
                            </button>
                            <button onClick = {() => this.changeCount('-')}>
                                -
                            </button>
                        </span>
                        
                    </div>
                    <h3>Total: ${(this.props.count * this.props.price * .01).toFixed(2)} </h3>
                </div>
                <div>
                    <button onClick = {() => this.removeItem(this.props.cartItemId)}>Remove Item</button>
                    <button onClick = {()=> {this.itemDetailsNav()}}>Item Details</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {cartItemCount, removeCartItem, clearItem})(CartItem)