import React, { Component } from 'react'
import {connect} from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class Home extends Component {
    
    render() {
        return (
            <div>
               
                    <h1>Welcome to BreadBasket</h1>
                <img src={process.env.PUBLIC_URL + "/bread_basket_icon.jpg"} />
             
                <div className='textBox'>

                    {/* <img width = '400px' src= {aboutPic} alt='Profile pic here!'></img> */}
                    <div className='aboutBox'>

                       
                    </div>
                </div>

            </div>
        )
    }
}

let mapStateToProps= state => {
    return ({
        routes: state.routes
    })
}

export default connect(mapStateToProps)(Home)
