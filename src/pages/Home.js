import React, { Component } from 'react'
import {connect} from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class Home extends Component {
    
    render() {
        return (
            <div>
               
                <h1>Welcome to BreadBasket</h1>
                <img class = "homePic" src='https://secureservercdn.net/45.40.150.81/0m4.91e.myftpupload.com/wp-content/uploads/2020/03/groceries-and-meat-image-1038x576.jpg' />
                <div class = "container">
                    <div class = "homeSection">
                        <h1> 
                            Shop from popular locations
                        </h1>
                        <p> 

                        </p>
                            <div className='row homeRow'>
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
