import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCart } from '../actions'
import CartItem from '../components/CartItem'

class Cart extends Component{
    componentDidMount(){
        this.props.getCart(this.props.cart_id)
    }

    render() {
        return(
            <div class = 'container'>
                
                <div class = 'wrapper cart'>
                    <h1>Cart</h1>
                    {/* {this.props.items.map(item => {
                        return <CartItem image = {item.image} name = {item.name} count = {item.count} price = {item.price}/>
                    })} */}
                </div>
                
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return({
       cart_id: state.cart.cart_id
    })
}

export default connect(mapStateToProps, {getCart})(Cart)