import React from 'react'
import ListCard from '../components/ListCard'

const FoodBrowser = props => {
    return (
        <div class= "container">
            <h1>{props.name}</h1>
            <br></br>
                <div class = "row justify-content-center">
                    <ListCard/>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
                <br></br>
                <div class = "row justify-content-center">
                    <div class = "col-1">
                        <button type="button" class="btn btn-primary btn-sm">Previous</button>
                    </div>
                    <div class = "col-1">
                        <button type="button" class="btn btn-primary btn-sm">Next</button>
                    </div>
                </div>
                <div class = "well well-sm">
                    <p>
                        DSIFOJSDIOFJSDIOFJISODFIJSDOIF
                        SDIFOSDIOFSJDIOFJSODIO
                        SDFIODSJFIOJSDOIJ
                    </p>
                    
                </div>
            <br></br><br></br>
        </div>
    )
}

export default FoodBrowser