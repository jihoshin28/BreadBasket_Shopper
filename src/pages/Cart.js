import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCart } from '../actions'
import CartItem from '../components/CartItem'

class Cart extends Component{
    componentDidMount(){
        if(!!this.props.shopperId) {
            console.log("hello!")
            this.props.getCart({shopper_id: this.props.shopperId})
        }
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
        shopperId: state.auth.userAuthId
    })
}

export default connect(mapStateToProps, {getCart})(Cart)