import React from 'react'
import {connect} from 'react-redux'
import {selectStore, getItems, removeCartItem, dropCart, startCart} from '../actions'

class StoreDropdown extends React.Component {

    componentDidUpdate(prevState){
        if(prevState.selectedStore !== this.props.selectedStore){

            this.props.getItems(this.props.selectedStore.attributes.id)
            this.props.dropCart()
            this.props.startCart({ shopper_id: this.props.shopperId })
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
        shopperId: state.auth.currentShopper.id,
        stores: state.stores.storesList,
        selectedStore: state.stores.selectedStore,
        cartItems: state.cart.cart_items
    })
}

export default connect(mapStateToProps, {selectStore, getItems, removeCartItem, dropCart, startCart})(StoreDropdown)