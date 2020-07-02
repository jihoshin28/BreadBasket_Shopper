import React, { Component } from 'react'
import Dropdown from '../components/Dropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'

class OrderPage extends Component {
    componentDidMount(){
        console.log(this.props)
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
                    <FoodCategoryNav categories= {this.props.categories}/>
                </div>
                
                <br></br><br></br>
                {
                    this.props.categories.map(category => {
                        return (
                            <FoodList title={category.title} />
                        )   
                    })
                }
            </div>
        )
    }
}

export default OrderPage
