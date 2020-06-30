import React, { Component } from 'react'
import Dropdown from '../components/Dropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'

export class OrderPage extends Component {
    constructor(){
        super()
        this.state = {
            categories: [
                {
                    name: "Meat/Seafood",
                    url: "meats"
                }, 
                {
                    name:"Produce",
                    url: "produce"
                },
                {
                    name: "Dairy",
                    url: "dairy"
                },
                {
                    name: "Snacks",
                    url: "snacks"
                },
                {
                    name: "Beverages",
                    url: "beverages"
                },
                {
                    name: "Frozen",
                    url: "frozen"
                },
                {
                    name: "Household",
                    url: "household"
                },
                {
                    name: "Etc.",
                    url: "etc"
                }
            ]
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
                <div class = "row justify-content-center">
                    <FoodCategoryNav categories= {this.state.categories}/>
                </div>
                
                <br></br><br></br>
                {
                    this.state.categories.map(category => {
                        return (
                            <FoodList name={category.name} />
                        )   
                    })
                }
            </div>
        )
    }
}

export default OrderPage
