import React from 'react'

const Category = props => {
    alert = e => {
        e.preventDefault()
        console.log(e.target)
    }
    var url = `/products/?category=${props.url}`
    return (
        <div class = "col-sm-auto">
            <a href = {url} data-category = {props.url}>
                {props.name}
            </a>
        </div>
    )
}
export default Category