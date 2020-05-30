import React, { Component } from 'react'
// import aboutPic from '../public/logo192.png'
export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to BreadBasket</h1>
            <div className='textBox'>
                <p> Hi! I'm Allen.</p>
                {/* <img width = '400px' src= {aboutPic} alt='Profile pic here!'></img> */}
                <div className = 'aboutBox'>
                
                    <p>
                        I'm a local bay area native with a drive to innovate and solve problems.
                        I graduated from UCSD in 2016 with a degree in General Biology, but I found out
                        my true passion was in building things. Software engineering seemed to be
                        the perfect fit. To pursue this career path, I recently graduate from Flatiron,
                        where I spent 3 months completely dedicated to learning full-stack development. 
                        I learned Ruby, Rails, Javascript, and React, all of which I've become familiar with
                        through labs, coding challeneges, and team projects.

                    </p>

                    <p>
                        Using computers have always seemed cyptic to me, but I've recently found that 
                        making a computer, is less like solving a math problem, and there are a ton of 
                        things you can build if you just know how to speak the language. I am interested 
                        in investing in the programming to continue build things that interest me. 
                    </p>

                    <p>
                    I'm also currently looking for a job and would love to connect!
                    </p>

                    <p>
                        I am currently familiar with:
                    </p>
                    <p>- Ruby</p>
                    <p>- Rails</p>
                    <p>- Javascript</p>
                    <p>- React/Redux</p>
                    <p>- HTML</p>
                    <p>- CSS</p>
                    <p>- Github</p>
                    <p>...And I'm continuing to learn more!</p>
                    <br></br>
                </div>
            </div>
                
            </div>
        )
    }
}

export default Home
