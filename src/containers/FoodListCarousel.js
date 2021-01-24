import React, { Component } from 'react';
import FoodList from '../containers/FoodList'
import {connect} from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class FoodListCarousel extends Component {

    componentDidMount(){
        console.log(this.props.items)
    }
    
    splitItems = (start, end) => {
        let rowLength = this.props.items.length
        let iterations = rowLength/6
        let currentItems = this.props.items.slice(start, end)
        console.log(currentItems)
        return <FoodList items = {currentItems}/>
    }

    render(){
        return (
            <div>
                <Carousel>
                    <div>
                    {this.splitItems(0, 6)}
                        </div> 
                    <div>
                    {this.splitItems(6, 12)}
                        </div> 
                </Carousel>
            </div>

        )
    }    
}

export default connect(null, {})(FoodListCarousel)
