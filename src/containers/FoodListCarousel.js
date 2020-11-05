import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

class FoodListCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            duration: 300,
            initialSlide: 1,
            swipe: false
        };
        return (
            <div>
                <span>CustomSlider</span>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
export default FoodListCarousel
