import React from 'react'
import {connect} from 'react-redux'
import MapContainer from '../components/MapContainer'
import {storeAddress} from '../actions'
import axios from 'axios'

class MapPage extends React.Component {
    componentDidMount(){
        this.getAddress()
    }

    getAddress = async () => {
        let location = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.store_params}&key=AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg`)
        this.props.storeAddress(location.data.results[0].geometry.location)
    }

    render(){
        return(
            <MapContainer store_coords = {this.props.store_coords}></MapContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        store_params: [
            state.stores.selectedStore.attributes.address.split(' ').join('+'), 
            state.stores.selectedStore.attributes.city.split(' ').join('+'), 
            state.stores.selectedStore.attributes.state
        ].join('+'),
        store_coords: state.stores.coords
    })
}

export default connect(mapStateToProps, {storeAddress})(MapPage)