import React, { Component } from 'react'
import Dropdown from '../components/Dropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'

export class OrderPage extends Component {
    constructor(){
        super()
        this.state = {
            "categories": ["Meat/Seafood", "Produce", "Dairy", "Snacks", "Beverages", "Frozen", "Household", "More"]
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
                        <Dropdown />
                    </div>
                    <div class="col-sm-4">
                        <h3>Grocery store name</h3>
                    </div>
                    <div class="col-sm-4">
                        <Searchbar />
                    </div>
                </div>
                <FoodCategoryNav categories = {this.state.categories}/>
                <br></br><br></br>
                {
                    this.state.categories.map(category => {
                        return (
                            <FoodList name={category} />
                        )   
                    })
                }
            </div>
        )
    }
}

export default OrderPage
