import React, { Component } from 'react'
import {connect} from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class Home extends Component {
    
    render() {
        return (
            <div>
               
                <h1>Welcome to BreadBasket</h1>
                <img class = "homeMainPic" src='https://secureservercdn.net/45.40.150.81/0m4.91e.myftpupload.com/wp-content/uploads/2020/03/groceries-and-meat-image-1038x576.jpg' />
                <div class = "container">
                    <div class = "homeSection">
                        <div className = "row homeRow">
                            <h1> 
                                Shop from popular locations
                            </h1>
                            <p> 
                                Get groceries delivered from all your favorite locations. We have a large variety of stores to pick from, for all your specific grocery needs.
                            </p>
                        </div> 
                    </div>
                    
                            <div className = 'row homeRow'>
                                <div className = 'col-2'>
                                    <div className = "storeLogoBubble">
                                        <img class = "storeLogo" src= "https://1000logos.net/wp-content/uploads/2019/08/Costco-Logo-1997%E2%80%93present.jpg"/> 
                                    </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                    <img class="storeLogo" src="https://lh3.googleusercontent.com/proxy/UDOluroL4Y1ZHaYTHEg_BkWuTQ2fQ-kdvSPnrjvxYS8eZ7n2bANmqhiBlVnz5ps56-UqwKBcOeWF9p-xa2oFlsL6a7vKvfycBn7qKVMxnOvBQwazaF-chDw" />

                                </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                    <img class="storeLogo" src="https://d2lnr5mha7bycj.cloudfront.net/store_configuration/logo/212/white_label_landing_page_6217c6f4-ca57-4174-b463-b5508f095889.png" />

                                </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                    <img class="storeLogo" src="https://pbs.twimg.com/profile_images/1111764791503151104/2kXoX9z-.png" />

                                </div>
                                </div> 
                                <div className='col-2'>
                                <div className="storeLogoBubble">
                                    <img class="storeLogo" src="https://s4745.pcdn.co/wp-content/uploads/2015/05/safeway-logo_10729611.jpg" />

                                </div>
                                </div> 
                            </div>
                        
                            <div className = "row homeRow">
                                <div className = "col-8">
                                    <img className = "homeSectionPic" src= "https://img1.mashed.com/img/gallery/grocery-delivery-services-ranked-from-worst-to-first/intro-1585162312.jpg"/> 
                                </div>  
                                <div className = "col-4">
                                    <h6>Delivery drivers ready to ship your order right to your front door</h6> 
                                    <p> Orders made on BreadBasket are updated on our live servers which our drivers on the Driver application can see updated live. </p> 
                                </div> 
                            </div>
                            <div className = "row homeRow">
                                <div className = "col-4">
                                    <h4>Update your orders live</h4>
                                    <p>
                                        Any last minute changes you want to make to your order? You can notify your driver on any changes you want to make on any current orders. 
                                    </p> 
                                </div> 
                                <div className = "col-8">
                                    <img className="homeSectionPic" src="https://www.gannett-cdn.com/media/2017/06/14/TennGroup/Knoxville/636330432728891184-instacart-0056.jpg?width=640" />
                                </div>
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
