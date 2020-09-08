import React from 'react'
import {connect} from 'react-redux'
import {selectStore, getItems, removeCartItem, dropCart} from '../actions'
import {isEmpty} from 'lodash'

class StoreDropdown extends React.Component {

    componentDidUpdate(prevState){
        if(prevState.selectedStore !== this.props.selectedStore){

            this.props.getItems(this.props.selectedStore.attributes.id)
            this.props.dropCart()
            if(!isEmpty(this.props.cartItems)){
                let keys = Object.keys(this.props.cartItems)
                for(let i = 0; i < keys.length; i++){
                    this.props.removeCartItem(keys[i])
                }
            }
        }
    }
    
    storeOptions = () => {
        return this.props.stores.map((store)=> {
            return (
                <button class="dropdown-item" id = {store.attributes.id} value={store.attributes.name}>{store.attributes.name}</button>
            )
        })
    } 

    selectStore = (e) => {
        let store = this.props.stores.find(store => store.id == e.target.id)
        console.log(store)
        this.props.selectStore(store)
        // window.history.pushState({}, '', '/orderpage')
        // window.history.go()
    }

    render() {
        return (
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.selectedStore.attributes.name}
                </button>
                <div onClick = {(e) => this.selectStore(e)} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {this.storeOptions()}
                </div>
            </div>
    
            
        )
    }
}

let mapStateToProps = state => {
    return ({
        stores: state.stores.storesList,
        selectedStore: state.stores.selectedStore,
        cartItems: state.cart.cart_items
    })
}

export default connect(mapStateToProps, {selectStore, getItems, removeCartItem, dropCart})(StoreDropdown)