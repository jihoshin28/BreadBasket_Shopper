import React from 'react'
import { Link } from 'react-router-dom'

const Category = props => {

    return (
        <div class = "col-sm-auto">
            <a class = "category-btn btn-2" href = {`/products/${props.name}`} data-category = {props.name}>
                {props.title}
            </a>
        </div>
    )
}
export default Category