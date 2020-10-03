import React from 'react'
import {connect} from 'react-redux'
import MapContainer from '../components/MapContainer'
import {storeCoords} from '../actions'
import axios from 'axios'

class MapPage extends React.Component {
    

    // getAddress = async () => {
    //     let location = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.store_params}&key=AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg`)
    //     this.props.storeCoords(location.data.results[0].geometry.location)
    // }

    render(){
        return(
            <MapContainer></MapContainer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return({
//         store_params: [
//             state.stores.selectedStore.attributes.address.split(' ').join('+'),
//             state.stores.selectedStore.attributes.city.split(' ').join('+'),
//             state.stores.selectedStore.attributes.state
//         ].join('+')
//     })
// }

export default MapPage