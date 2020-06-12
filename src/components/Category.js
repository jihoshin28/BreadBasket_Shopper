import React from 'react'

const Category = props => {
    return (
        <div class = "col-sm-auto">
            <a href= "/products">
                {props.name}
            </a>
        </div>
    )
}
export default Category