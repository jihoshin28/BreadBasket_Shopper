import React from 'react'
import { connect } from 'react-redux'

class CurrentOrder extends React.Component {
    render(){
        return(
            <div className = "container">
                <h1>Current Order</h1>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return ({
        
    })
}

export default connect(mapStateToProps, {})(CurrentOrder)