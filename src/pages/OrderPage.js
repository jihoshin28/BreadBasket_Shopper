import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getItems, getCategories } from '../actions'
import Dropdown from '../components/Dropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'

class OrderPage extends Component {

    componentDidMount(){
        this.props.getItems(1)
    }
    render() {
        console.log(this.props.items)
        return (
            <div>
                <br></br>
                <h1>Order Page</h1>
                <br></br>
                <div class = "row">
                    <div class="col-sm-4">
                        <Dropdown selectedStore = {this.props.selectedStore} stores = {this.props.stores} onStoreChange= {this.props.onStoreChange}/>
                    </div>
                    <div class="col-sm-4">
                        <h2>{this.props.selectedStore}</h2>
                    </div>
                    <div class="col-sm-4">
                        <Searchbar onSearchSubmit = {this.props.onSearchSubmit} onSearchChange = {this.props.onSearchChange}/>
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
    console.log(state.items[0])
    return ({
        items: state.items.itemsList.data,
        categories: state.categories
    })
}

export default connect(mapStateToProps,{getItems})(OrderPage)
