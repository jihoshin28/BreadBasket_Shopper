import React, { Component } from 'react';
import {connect} from 'react-redux'
import FoodList from '../containers/FoodListCarousel'


class FoodListCarousel extends Component {
    constructor(){
        super()
        this.state = {
            itemsArray: []
        }
    }

    componentDidMount(){
        this.sliceList(this.props.categoryItems)
    }

    sliceList(list){
        let rows = list.length/6
    
        for (let i = 0; i < rows; i++){
            let start = i * 6
            let end = (i + 1) * 6
            this.setState({
                itemsArray: [...this.state.itemsArray, [list.slice(start, end)]]
            })

        }
    }

    render(){
        console.log(this.state.itemsArray)
        return (
            <div id="carouselExampleIndicators" class="carousel slide center food-list-carousel" data-interval="false" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">

                    <div class="carousel-item active food-list-section">
               
                        {/* <FoodList items = {this.state.itemsArray[0]}/> */}
                    </div>
                    <div class="carousel-item food-list-section">
                        {/* <FoodList items = {this.state.itemsArray[1]} /> */}
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
