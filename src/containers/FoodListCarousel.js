import React, { Component } from 'react';


class FoodListCarousel extends Component {
    render(){
        return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div data-interval = "false" class="carousel-inner food-list-carousel">
                <div class="carousel-item active">
                    <div class='food-list-section'>
                            <h1>
                                Slide 1
                            </h1>
                        </div>
                </div>
                    <div class="carousel-item">
                        <div class = 'food-list-section'>
                            <h1>
                                Slide 2
                            </h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class='food-list-section'>
                            <h1>
                                Slide 3
                            </h1>
                        </div>
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
export default FoodListCarousel
