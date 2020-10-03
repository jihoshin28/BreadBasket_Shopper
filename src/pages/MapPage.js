import React from 'react'
import {connect} from 'react-redux'
import MapContainer from '../components/MapContainer'
import {storeAddress} from '../actions'


class MapPage extends React.Component {
    componentDidMount(){
        // this.getAddress()
    }

    // getAddress = async () => {
    //     let location = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.store_params}&key=AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg`)
    //     this.props.storeAddress(location.data.results[0].geometry.location)
    // }

    render(){
        return(
            <MapContainer></MapContainer>
        )
    }
}



export default MapPage