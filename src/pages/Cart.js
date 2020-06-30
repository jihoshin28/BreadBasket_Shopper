import React, {Component} from 'react'
import CartItem from '../components/CartItem'

class Cart extends Component{
    constructor(){
        super()
        this.state = {
            items: [
                {
                    image: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
                    name: "Tomato"
                },
                {
                    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    name: "Bananas"
                },
                {
                    image: "https://www.sprouts.com/wp-content/uploads/2017/11/Sweet-Potatoes.jpg",
                    name: "Sweet Potatoes"
                },
                {
                    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F10%2Fdozen-eggs-in-carton.png",
                    name: "Eggs"
                },
                {
                    image: "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg?itok=j89yDeId",
                    name: "Bread"
                }
            ]
        }
    }

    render() {
        return(
            <div class = 'container'>
                
                <div class = 'wrapper cart'>
                    <h1>Cart</h1>
                    {this.state.items.map(item => {
                        return <CartItem image = {item.image} name = {item.name}/>
                    })}
                </div>
                
            </div> 
        )
    }
}

export default Cart