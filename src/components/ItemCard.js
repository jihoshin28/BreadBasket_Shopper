import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../actions'

let ItemCard = (props) => {
    let[ref] = useState(React.createRef())
    useEffect(() => {
        
    }, [])
    let addCartItem = (e) => {
        
        e.preventDefault()
        
        ref.current.children[1].children[2].children[0].src = process.env.PUBLIC_URL + 'check.svg'
        ref.current.children[1].children[2].classList.add('item-added')
        // let cartItemInfo = {
        //     cart_id: props.cart_id,
        //     item_id: props.item_id,
        //     quantity_num: 1
        // }
        // console.log(cartItemInfo)
        
        // props.addCartItem(cartItemInfo)
    }


    return (
        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <div class="card" ref = {ref}>
                <div style = {{height: "45%", width: "45%", alignSelf: "center", marginTop: "5px"}}>
                    <img src={props.image} style={{ height: "100%" }} class="card-img-top" alt="..." />
                </div>
                
                <div class="card-body">
                    <h6 class="card-title">{props.name}</h6>
                    <p style={{fontSize: "10px"}}> ${props.price}</p>
                    <a class= "btn btn-primary cart-item-button" onClick={addCartItem} class="btn btn-primary">
                        <img class = "cart-item-button" src={process.env.PUBLIC_URL + 'plus.svg'} alt="Image" />
                    </a>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return({
        cart_id: state.cart.cart_id,
        cart_items: state.cart.cart_items
    })
}


export default connect(mapStateToProps, {addCartItem})(ItemCard)