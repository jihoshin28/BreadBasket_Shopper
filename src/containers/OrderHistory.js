import React, { Component } from 'react'

export class OrderHistory extends Component {
    render() {
        return (
            <div>
                <h1>Order History</h1>
                <div>
                    <h2>
                        Nutrition Tracker 2.0
                    </h2>
                    <div className='aboutBox'>
                        <p>
                            A nutrition tracking app where users can post and edit foods/exercises
                            for every day on the calendar, with graphs that update with live data.
                        </p>
                    </div>
                    <span>
                        <a href='https://github.com/geeuho/Nutrition_Tracker_2.0_frontend'>NutritionTracker Github (Frontend)</a>|
                    <a href='https://github.com/geeuho/Nutrition_Tracker_2.0_backend'>NutritionTracker Github (Backend)</a>|
                    <a href='https://github.com/geeuho/Nutrition_Tracker_2'>NutritionTracker Live Site</a>
                    </span>
                </div>
                <br></br>
                <div>
                    <h2>
                        Roast N Toast
                    </h2>
                    <div className='aboutBox'>
                        <p>
                            A reddit style website which is half for toasting and half for roasting. The users
                            can submit pictures which other users can then comment and like... or dislike.
                        </p>
                    </div>
                    <span>
                        <a href='https://github.com/geeuho/roastntoast-frontend'>Roast N Toast Github(Frontend)</a>|
                    <a href='https://github.com/geeuho/roastntoast-backend'>Roast N Toast Github(Backend)</a>|
                    <a href='https://roast-n-toast.herokuapp.com/'>Roast N Toast Live Site</a>
                    </span>
                </div>
                <br></br>
                <div>
                    <h2>
                        Byte Note
                    </h2>
                    <div className='aboutBox'>
                        <p>
                            An word editor document built from vanilla Javascript. We modeled our user interface
                            with some of Notion's functionality, where users can drag and drop blocks of text. You
                            can also browse Dev.to articles in an adjacent window.
                        </p>
                    </div>
                    <span>
                        <a href='https://github.com/geeuho/byte-note-1'>Byte Note Github</a>|
                    <a href='https://github.com/geeuho/byte-note-1'>Byte Note Live Site</a>
                    </span>
                </div>
                <br></br>
                <div>
                    <h2>
                        Movie Reviewer
                    </h2>
                    <div className='aboutBox'>
                        <p>
                            An word editor document built from vanilla Javascript. We modeled our user interface
                            with some of Notion's functionality, where users can drag and drop blocks of text. You
                            can also browse Dev.to articles in an adjacent window.
                        </p>
                    </div>
                    <span>
                        <a href='https://github.com/geeuho/Movie_Reviewer_2019'>Movie Reviewer Github</a>|
                    <a href='https://movie-reviewer-rb.herokuapp.com'>Movie Reviewer Live Site</a>
                    </span>
                </div>
                <br></br>
            </div>

        )
    }
}

export default OrderHistory
