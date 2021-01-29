import React from 'react'

const Category = props => {

    return (
        <div class = "col-sm-auto">
            <a class = "category-btn btn-2 roboFont" href = {`/products/${props.name}`} data-category = {props.name}>
                {props.title}
            </a>
        </div>
    )
}
export default Category