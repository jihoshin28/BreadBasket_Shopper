import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getItems, selectStore, dropCart, startCart, getCart, getActiveOrders, userCoords} from '../actions'
import StoreDropdown from '../components/StoreDropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'
import FoodListCarousel from '../containers/FoodListCarousel'

class OrderPage extends Component {

    componentDidMount(){
        console.log(this.props.items)
        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error)
        this.props.getItems(this.props.selectedStore.attributes.id)
        this.props.getActiveOrders(this.props.shopperId)
        
        if (!!this.props.shopperId && !this.props.cartId) {
            console.log("Hello shopper! Welcome to BreadBasket!")
            this.props.startCart({ shopper_id: this.props.shopperId })
        }
    }

    success(pos){
        console.log(this.props)
        if(!!pos){
            var crd = pos.coords
            console.log("HEY LISTEN", { lat: crd.latitude, lng: crd.longitude })
            this.props.userCoords({lat: crd.latitude, lng: crd.longitude})
        }
    }
    
    error(err){
        console.warn(`ERROR: ${err.code}: ${err.message}`)
    }

    componentDidUpdate(prevState){
        if (prevState.cartId !== this.props.cartId){
            this.props.getCart(this.props.cartId)
        }
    }
    

    
    render() {
        return (
            <div>
                <br></br>
                <h1>Order Page</h1>
                <br></br>
                <div class = "row">
                    <div class="col-sm-4">
                        <StoreDropdown />
                    </div>
                    
                    <div class="col-sm-4">
                        <h2>{this.props.selectedStore.attributes.name}</h2>
                    </div>
                    <div class="col-sm-4">
                        <Searchbar history = {this.props.history}/>
                    </div>
                </div>
                <div class = "row justify-content-center">
                    <FoodCategoryNav history={this.props.history} categories= {this.props.categories}/>
                </div>

               
                
                <br></br><br></br>
                {
                    this.props.categories.map(category => {
                        let categoryItems = this.props.items.filter(item => item.attributes.category === category.name)
                        return (
                            <div class = "food-items-section">
                                <h1>{category.title}</h1>
                                <FoodListCarousel class="food-list-carousel" categoryItems={categoryItems} category = {category.name}>
                                    
                                </FoodListCarousel>
                            </div>
                        )   
                    })
                }

                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        activeOrders: state.order.active_orders,
        items: state.items.itemsList.data,
        categories: state.categories,
        stores: state.stores.storesList,
        selectedStore: state.stores.selectedStore,
        shopperId: state.auth.currentShopper.id,
        cartId: state.cart.cart_id,
        cartItems: state.cart.cart_items
    })
}

export default connect(mapStateToProps, {getItems, selectStore, dropCart, startCart, getCart, getActiveOrders, userCoords})(OrderPage)
