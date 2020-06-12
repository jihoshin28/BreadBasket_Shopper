import React, {Component} from 'react'
import Category from '../components/Category'

const categories = ["Meat/Seafood", "Produce", "Dairy", "Snacks", "Beverages", "Frozen", "Household", "More"]
const FoodCategories = props => {
    return (
        <div class="row justify-content-center">
            {categories.map(category => {
                return <Category name = {category}/>
            })}
        </div>
    )
}

export default FoodCategories