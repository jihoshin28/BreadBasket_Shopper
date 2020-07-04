import React, {Component} from 'react'
import Searchbar from '../components/Searchbar'
import FoodList from '../containers/FoodList'


class Products extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            foodCategory: null,
            title: ""
        }
    }
    
    formChange = (event) => {
        this.setState({
            foodCategory: event.target.value
        })
        
    }

    componentDidMount(){
        let current = this.props.match.params.category
        document.getElementById(current).checked = true
    }
 

    componentDidUpdate(){
        window.location.replace(`/products/${this.state.foodCategory}`)
    }

    

    render(){
        let categoryData = this.props.categories.find((index) => index.name === this.props.match.params.category)
        let pageTitle = categoryData.title
        return (
            <div class = "products">
                <div class = "sidebar">
                    <div class = "sidebar-header">
                        <h3>Categories</h3>
                    </div>
                    <form onChange = {this.formChange} onSubmit = {this.formSubmit}>

                            <div class="input-group-text">
                                <input type="radio" id = "all" name="food-category" value="all" aria-label="All" /> All
                            </div>
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
                      
                        <button type="submit">Search</button>
                    </form>
                    
                </div>

                <div class = "content"> 
                    <div class = "container-fluid justify-content-center">
                        <h1 class = "productsHeader">{pageTitle}</h1>
                        <div class = "row">
                            <div>
                                <h2>{this.props.selectedStore}</h2>
                            </div>
                            <div>
                                <Searchbar/>
                            </div>
                        </div>
                        <FoodList/>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default Products
