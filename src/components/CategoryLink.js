import React from 'react'
import { Link } from 'react-router-dom'

const Category = props => {
    const navigate = () => {
        var url = `/products/${props.name}`
        props.history.push(url)
    }

    return (
        <div class = "col-sm-auto">
            <Link onClick = {() => navigate()} data-category = {props.name}>
                {props.title}
            </Link>
        </div>
    )
}
export default Category