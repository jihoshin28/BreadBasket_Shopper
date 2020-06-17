import React, {Component} from 'react'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodCategory: props
        }
    }

    formSubmit = (event) => {
        event.preventDefault()
        console.log(event.value)
    } 

    render(){
        return (
            <div class = "wrapper">
                <div id = "sidebar">
                    <div class = "sidebar-header">
                        <h3>Categories</h3>
                    </div>
                    <form onSubmit = {this.formSubmit}>
                        
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
                                <input type="radio" name= "food-category" value="more" aria-label="More Input"/> More
                            </div>
                      
                        <button type="submit">Search</button>
                    </form>
                    
                </div>

                <div id = "content"> 
                    <div class = "row justify-content-center">
                        <h1> Hello</h1>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default Products
