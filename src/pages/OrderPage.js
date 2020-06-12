import React, { Component } from 'react'
import Dropdown from '../components/Dropdown'
import Searchbar from '../components/Searchbar'
import FoodCategories from '../containers/FoodCategories'

export class OrderPage extends Component {
    render() {
        return (
                <div>
                    
                    <h1>Order Page</h1>
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
                    <FoodCategories/>
                    
                    
                </div>
           
            
        )
    }
}

export default OrderPage
