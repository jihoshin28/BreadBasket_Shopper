import React, { Component } from 'react';
import {connect} from 'react-redux'
import FoodList from '../containers/FoodListCarousel'


class FoodListCarousel extends Component {

    componentDidMount(){
        console.log(this.props.categoryItems)
        console.log(this.props.category)
        console.log(this.currentItems())
    }

    currentItems(){
        return this.props.categoryItems.filter(item => item.attributes.category === this.props.category)
    }

    sliceList(){
        
        return this.currentItems().slice(0, 6)
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
                            {this.props.children}
                    </div>
                    <div class="carousel-item food-list-section">
                        <h1>
                            Slide 2
                        </h1>
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
        items: state.items.itemsList.data
    })
}

export default connect(mapStateToProps, {})(FoodListCarousel)
