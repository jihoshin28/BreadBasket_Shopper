import React, { Component } from 'react';
import {connect} from 'react-redux'
import FoodList from '../containers/FoodListCarousel'


class FoodListCarousel extends Component {

    componentDidMount(){
        console.log(this.props.categories)
        console.log(this.sliceItemsArray(0))
        console.log(this.sliceItemsArray(1))
    }

    render(){
        return (
            <div id="carouselExampleIndicators" class="carousel slide center food-list-carousel" data-interval="false" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
                <div class="carousel-inner">
                <div class="carousel-item active food-list-section">
                    {/* <FoodList items={this.props.items.filter(item => item.attributes.category === this.props.category).slice(0,6)}/> */}
                </div>
                <div class="carousel-item food-list-section">
                    {/* <FoodList items = {this.sliceItemsArray(1)} /> */}
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        )
    }    
}

let mapStateToProps = (state) => {
    return ({
        categories: state.categories, 
        items: state.items.itemsList.data
    })
}

export default connect(mapStateToProps, {})(FoodListCarousel)
