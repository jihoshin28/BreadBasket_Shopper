import React from 'react'
import Category from '../components/Category'

const FoodCategories = props => {
    return (
        <div class="row justify-content-center">
            {props.categories.map(category => {
                return <Category name = {category}/>
            })}
        </div>
    )
}

export default FoodCategories