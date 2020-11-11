import React from 'react'
import ItemCard from '../components/ItemCard'

const FoodList = props => {
    console.log(props.items, "foodlist")
    let itemCards = props.items.map((item, id) => {
        return <ItemCard key = {id} item_id = {parseInt(item.id)} image = {item.attributes.image} price = {(item.attributes.price * .01).toFixed(2)} name = {item.attributes.name}/>
    })

    return (
        <div class= "container">
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
        </div>
    )
}

export default FoodList