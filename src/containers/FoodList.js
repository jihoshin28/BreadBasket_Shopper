import React from 'react'
import ItemCard from '../components/ItemCard'

const FoodList = props => {
    let itemCards = props.items.map((item) => {
        return <ItemCard id = {item.id} image = {item.attributes.image} price = {item.attributes.price.toFixed(2)} name = {item.attributes.name}/>
    })
    return (
        <div class= "container">
            <h1>{props.title}</h1>
            <br></br>
                <div class = "row justify-content-center">
                    {itemCards}
                </div>
                <br></br>
                <div class = "row justify-content-center">
                    <div class = "col-1">
                        <button type="button" class="btn btn-primary btn-sm">Previous</button>
                    </div>
                    <div class = "col-1">
                        <button type="button" class="btn btn-primary btn-sm">Next</button>
                    </div>
                </div>
                
            <br></br><br></br>
        </div>
    )
}

export default FoodList