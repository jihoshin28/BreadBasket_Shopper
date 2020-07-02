import React from 'react'
import CategoryLink from '../components/CategoryLink'

const FoodCategories = props => {
    return (
        <div class="row justify-content-center">
            {props.categories.map(category => {
                return <CategoryLink name = {category.name} title = {category.title} />
            })}
        </div>
    )
}

export default FoodCategories