import React, { Component, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'

class OrderPage extends Component {

    componentDidMount(){
        console.log(this.props.stores)
    }
    render() {
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
                        let items = this.props.items.filter(item => item.category === category.name)
                        console.log(items)
                        return (
                            <FoodList items = {items} title={category.title} />
                        )   
                    })
                }
            </div>
        )
    }
}

export default OrderPage
