import React from 'react'
import {connect} from 'react-redux'

class EditShopper extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params)
    }

    render(){
        return(
            <div>
                <h1>Edit Profile</h1>
            </div>
        )
    }
}

export default connect(null)(EditShopper)