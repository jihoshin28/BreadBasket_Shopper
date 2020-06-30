import React, {Component} from 'react'
import FoodList from '../containers/FoodList'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodCategory: "Category"
        }
    }

    formChange = (event) => {
        this.setState({
            foodCategory: event.target.value
        })
    }

    formSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            foodCategory: event.target.value
        })
    } 

    componentDidUpdate(){
        console.log('updated')
    }

    componentDidMount() {
        console.log('mounted')
    }

    render(){
        return (
            <div class = "products">
                <div class = "sidebar">
                    <div class = "sidebar-header">
                        <h3>Categories</h3>
                    </div>
                    <form onChange = {this.formChange} onSubmit = {this.formSubmit}>

                            <div class="input-group-text">
                                <input type="radio" name="food-category" value="all" aria-label="All" /> All
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="meats" aria-label="Meat/Seafood Input"/> Meat/Seafood
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="produce" aria-label="Produce Input"/> Produce
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="dairy" aria-label="Dairy Input"/> Dairy
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="snacks" aria-label="Snacks Input"/> Snacks
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="beverage" aria-label="Beverages Input"/> Beverages
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="frozen" aria-label="Frozen Input"/> Frozen
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="household" aria-label="Household Input"/> Household
                            </div>
                            <div class="input-group-text">
                                <input type="radio" name= "food-category" value="etc" aria-label="More Input"/> Etc.
                            </div>
                      
                        <button type="submit">Search</button>
                    </form>
                    
                </div>

                <div class = "content"> 
                    <div class = "container-fluid justify-content-center">
                        <h1 class = "productsHeader">{this.state.foodCategory}</h1>
                        <FoodList/>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default Products
