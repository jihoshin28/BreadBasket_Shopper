import React from 'react'
import ListCard from '../components/ListCard'

const FoodBrowser = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            
                <div class = "row justify-content-center">
                    
                    <ListCard/>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    

                </div>
                <div class = "row justify-content-center">

                </div>
            
        </div>
        

        
    )
}

export default FoodBrowser