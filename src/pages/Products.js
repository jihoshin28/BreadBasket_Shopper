import React, {Component} from 'react'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodCategory: props
        }
    }
    render(){
        return (
            <div class = "wrapper">
                <div id = "sidebar">
                    <div class = "sidebar-header">
                        <h3>Make a Selection</h3>
                    </div>
                    <ul class = "list-unstyled components">
                        <p>Categories</p>
                        
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="Meat/Seafood Input"/> Meat/Seafood
                        </div>
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="Produce Input" /> Produce
                        </div>
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="Dairy Input" /> Dairy
                        </div>
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="Snacks Input" /> Snacks
                        </div>
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="Beverages Input" /> Beverages
                        </div>
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="Frozen Input" /> Frozen
                        </div>
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="Household Input" /> Household
                        </div>
                        <div class="input-group-text">
                            <input type="radio" name= "food-category" aria-label="More Input" /> More
                        </div>
                    </ul>
                </div>

                <div id = "content container"> 
                    <div class = "row justify-content-center">
                        <h1> Hello</h1>
                    </div>
                    
                </div>

            </div>
        )
    }
    
}

export default Products
