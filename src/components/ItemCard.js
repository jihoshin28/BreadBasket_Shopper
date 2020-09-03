import React from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../actions'

class ItemCard extends React.Component  {

    addCartItem = (e) => {
        e.preventDefault()
        let cartInfo = {
            cart_id: this.props.cart_id,
            item_id: this.props.item_id
        }
        console.log(cartInfo)
        // this.props.addCartItem(cartInfo)
    }

    render(){
        return (
            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                <div class="card">
                    <div style = {{height: "45%", width: "45%", alignSelf: "center", marginTop: "5px"}}>
                        <img src={this.props.image} style={{ height: "100%" }} class="card-img-top" alt="..." />
                    </div>
                   
                    <div class="card-body">
                        <h6 class="card-title">{this.props.name}</h6>
                        <p style={{fontSize: "10px"}}> ${this.props.price}</p>
                        <a onClick = {this.addCartItem} style = {{fontSize: "10px", width: "2rem", height: '2rem'}} href="" class="btn btn-primary">+</a>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return({
        cart_id: state.cart.cart_id
    })
}


export default connect(mapStateToProps, {addCartItem})(ItemCard)