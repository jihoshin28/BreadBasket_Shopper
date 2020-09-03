import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getItems, selectStore, startCart } from '../actions'
import StoreDropdown from '../components/StoreDropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'

class OrderPage extends Component {

    componentDidMount(){
        if (!!this.props.shopperId) {
            console.log("Hello shopper! Welcome to BreadBasket!")
            this.props.startCart({ shopper_id: this.props.shopperId })
            this.props.getItems(parseInt(this.props.selectedStore.id))
        }
    }
    render() {
        console.log(this.props.selectedStore)
        return (
            <div>
                <br></br>
                <h1>Order Page</h1>
                <br></br>
                <div class = "row">
                    <div class="col-sm-4">
                        <StoreDropdown/>
                    </div>
                    <div class="col-sm-4">
                        <h2>{this.props.selectedStore.attributes.name}</h2>
                    </div>
                    <div class="col-sm-4">
                        <Searchbar/>
                    </div>
                </div>
                <div class = "row justify-content-center">
                    <FoodCategoryNav categories= {this.props.categories}/>
                </div>
                
                <br></br><br></br>
                {
                    this.props.categories.map(category => {
                        let categoryItems = this.props.items.filter(item => item.attributes.category === category.name)
                        return (
                            <FoodList items = {categoryItems} title={category.title} />
                        )   
                    })
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return ({
        items: state.items.itemsList.data,
        categories: state.categories,
        stores: state.stores.storesList,
        selectedStore: state.stores.selectedStore,
        shopperId: state.auth.userAuthId
    })
}

export default connect(mapStateToProps,{getItems, selectStore, startCart})(OrderPage)
