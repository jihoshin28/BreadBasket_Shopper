import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getFilteredItems } from '../actions'
import Searchbar from '../components/Searchbar'
import FoodList from '../containers/FoodList'


class Products extends Component {

    componentDidMount(){
        document.getElementById(`${this.props.match.params.category}`).checked = true
    }
 
    onCategoryChange = (e) => {
        console.log(e.target.value)
        window.history.pushState({}, '', `/products/${e.target.value}`)
        window.history.go()
    }

    render(){
        let category = this.props.match.params.category
        let filteredItems = this.props.items.filter(item => item.attributes.category === category)
        let categoryData = this.props.categories.find((category) => category.name === this.props.match.params.category)
        let categoryTitle = categoryData.title
        return (
            <div class = "products">
                <div class = "sidebar">
                    <div class = "sidebar-header">
                        <h3>Categories</h3>
                    </div>
                    <form onChange = {this.onCategoryChange} onSubmit = {this.formSubmit}>

                            <div class="input-group-text">
                                <input type="radio" id = "meats" name= "food-category" value="meats" aria-label="Meat/Seafood Input"/> Meat/Seafood
                            </div>
                            <div class="input-group-text">
                                <input type="radio" id="produce" name="food-category" value="produce" aria-label="Produce Input"/> Produce
                            </div>
                            <div class="input-group-text">
                                <input type="radio" id="dairy" name="food-category" value="dairy" aria-label="Dairy Input"/> Dairy
                            </div>
                            <div class="input-group-text">
                                <input type="radio" id="bakery" name="food-category" value="bakery" aria-label="Bakery Input" /> Bakery
                            </div>
                            <div class="input-group-text">
                                <input type="radio" id="snacks" name="food-category" value="snacks" aria-label="Snacks Input"/> Snacks
                            </div>
                            <div class="input-group-text">
                                <input type="radio" id="beverages" name="food-category" value="beverages" aria-label="Beverages Input"/> Beverages
                            </div>
                            <div class="input-group-text">
                                <input type="radio" id="frozen" name="food-category" value="frozen" aria-label="Frozen Input"/> Frozen
                            </div>
                            <div class="input-group-text">
                                <input type="radio" id="household" name="food-category" value="household" aria-label="Household Input"/> Household
                            </div>
                    </form>
                    
                </div>

                <div class = "content"> 
                    <div class = "container-fluid justify-content-center">
                        <h1 class = "productsHeader">{categoryTitle}</h1>
                        <div class = "row productsHeader">
                            <div className = "col-sm-5">
                                <h2>{this.props.selectedStore.attributes.name}</h2>
                            </div>
                            <div className = "col-sm-5">
                                <Searchbar onSearchSubmit={this.props.onSearchSubmit} onSearchChange={this.props.onSearchChange}/>
                            </div>
                        </div>
                    
                        <FoodList items = {filteredItems}/>
                    </div>
                </div>

            </div>
        )
    }
    
}

const mapStateToProps = state => {
    console.log(state)
    return({
        categories: state.categories,
        items: state.items.itemsList.data,
        selectedStore: state.stores.selectedStore
    })
}

export default connect(mapStateToProps)(Products)
