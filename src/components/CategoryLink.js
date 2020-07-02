import React from 'react'

const Category = props => {
    alert = e => {
        e.preventDefault()
        console.log(e.target)
    }
    var url = `/products/${props.name}`
    return (
        <div class = "col-sm-auto">
            <a href = {url} data-category = {props.name}>
                {props.title}
            </a>
        </div>
    )
}
export default Category