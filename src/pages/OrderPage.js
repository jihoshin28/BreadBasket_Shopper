import React, { Component, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Searchbar from '../components/Searchbar'
import FoodCategoryNav from '../containers/FoodCategoryNav'
import FoodList from '../containers/FoodList'

class OrderPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            stores: props.stores,
            selected: props.stores[0].name,
            searchTerm: ''
        }
    }

    onStoreChange = (e) => {
        console.log(e.target.innerHTML)
        this.setState({
            selected: e.target.innerHTML
        })
    }

    onSearchSubmit = (e) => {
        console.log(this.state.searchTerm)
    }

    onSearchChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value
        })
    }

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
                        <Dropdown selected = {this.state.selected} stores = {this.state.stores} onStoreChange= {this.onStoreChange}/>
                    </div>
                    <div class="col-sm-4">
                        <h3>Grocery store name</h3>
                    </div>
                    <div class="col-sm-4">
                        <Searchbar onSearchSubmit = {this.onSearchSubmit} onSearchChange = {this.onSearchChange} search/>
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
