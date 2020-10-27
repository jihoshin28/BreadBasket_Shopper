import React, { Component } from 'react'
import { connect } from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class About extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div class = "container">
                <h1>About</h1>
                {/* <img width = '400px' src= {aboutPic} alt='Profile pic here!'></img> */}

                    <div class = "row aboutBox">
                        <div class = "col-4">
                            <h3>Get your groceries delievered today! </h3>
                            <p>
                                Try out our grocery delivery service with a 

                            </p>
                        </div>
                        <div class = "col-8">
                                <img src= "https://itk-assets.nyc3.digitaloceanspaces.com/2020/03/grocery-delivery-services-1024x690.jpg" style = {{width: "100%"}}></img>                            
                        </div>
                    </div>


                    <div class = "row aboutRow"> 
                        <div class = "col-4">
                            <div>
                                <img class="aboutPic" src="https://itk-assets.nyc3.digitaloceanspaces.com/2020/03/grocery-delivery-services-1024x690.jpg"/>
                            </div>
                            <h4>Section 1 </h4>
                            <p>Section 1 Content </p>
                        </div> 
                        <div class="col-4">
                            <div>
                                <img class="aboutPic" src="https://itk-assets.nyc3.digitaloceanspaces.com/2020/03/grocery-delivery-services-1024x690.jpg" />
                            </div>
                            <h4>Section 2 </h4>
                            <p>Section 2 Content </p>
                        </div> 
                        <div class="col-4">
                            <div>
                                <img class="aboutPic" src="https://itk-assets.nyc3.digitaloceanspaces.com/2020/03/grocery-delivery-services-1024x690.jpg" />
                            </div>
                            <h4>Section 3 </h4>
                            <p>Section 3 Content </p>
                        </div> 
                    </div>     
            </div>
                

        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(About)
