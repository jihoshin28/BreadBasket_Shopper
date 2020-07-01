import React, {Component} from 'react'
import CartItem from '../components/CartItem'

class Cart extends Component{
    constructor(){
        super()
    }

    render() {
        return(
            <div class = 'container'>
                
                <div class = 'wrapper cart'>
                    <h1>Cart</h1>
                    {this.state.items.map(item => {
                        return <CartItem image = {item.image} name = {item.name} count = {item.count} price = {item.price}/>
                    })}
                </div>
                
            </div> 
        )
    }
}

export default Cart