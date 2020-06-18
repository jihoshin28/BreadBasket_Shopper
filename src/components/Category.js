import React from 'react'

const Category = props => {
    alert = e => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div class = "col-sm-auto">
            <a href= "/products/" data-category = {props.name}>
                {props.name}
            </a>
        </div>
    )
}
export default Category