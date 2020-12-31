import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getFilteredItems } from '../actions'
import Searchbar from '../components/Searchbar'
import FoodList from '../containers/FoodList'


class Products extends Component {
    componentDidMount(){
        console.log(process.env.PUBLIC_URL)
        // (`${this.props.match.params.category}`)
        console.log(document.getElementById("category-form"))
        console.log(this.props.categories)
    }
 
    onCategoryChange = (e) => {
        console.log(e.target.value)
        this.props.history.push(`/products/${e.target.value}`)
    }

    renderSideBar = () => {
        return (
            this.props.categories.map( category => {
                return (
                    <div class="input-group-text">
                        <input type="radio" id = "meats" name= "food-category" value={`${category.name}`} aria-label="Meat/Seafood Input"/> {`${category.title}`}
                    </div>
                )
            })
        )
    }

    render(){
        let category = this.props.match.params.category
        let filteredItems = this.props.items.filter(item => item.attributes.category === category)
        let categoryData = this.props.categories.find((category) => category.name === this.props.match.params.category)
        let categoryTitle = categoryData.title

        return (
            <div class = "products">
                <div class = "sidebar">
                    
                    <div class = "sidebar-menu">
                        <h3>Categories</h3>
                        <form id= "category-form" onChange = {this.onCategoryChange}>
                            {this.renderSideBar()}
                            
                        </form>
                
                    </div>
                    
                </div>

                <div class = "content"> 
                    <div class = "container-fluid justify-content-center">
                        <h1 class = "productsHeader">{categoryTitle}</h1>
                        <div class = "row productsHeader">
                            <div className = "col-sm-5">
                                <h2>{this.props.selectedStore.attributes.name}</h2>
                            </div>
                            <div className = "col-sm-5">
                                <Searchbar history = {this.props.history} onSearchSubmit={this.props.onSearchSubmit} onSearchChange={this.props.onSearchChange}/>
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
