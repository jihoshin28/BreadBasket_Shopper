import Axios from 'axios';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React from 'react'
import connect from 'react-redux'
import rails from '../services/Rails';
import axios from 'axios'


class MapContainer extends React.Component {
    componentDidMount (){
        console.log(this.props.store_coords)
    }


    mapStyles = {
        position: 'absolute',
        width: '100%',
        height: '100%'
    };

    // address
    // 5600%Pacific%Grove%Way%Union
    render(){
        return (
            <Map
                google={this.props.google}
                zoom={13}
                style={this.mapStyles}
                initialCenter={
                    this.props.store_coords
                }
            > 
                <Marker
                    name={'Your position'}
                    position={this.props.store_coords}
                    // icon={{
                    //     url: "/path/to/custom_icon.png",
                    //     anchor: new google.maps.Point(32, 32),
                    //     scaledSize: new google.maps.Size(64, 64)
                    // }} 
                    />
                 
            
            </Map>
        );
    }
}

const LoadingContainer = (props) => (
    <div>Loading</div>
)

export default GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg",
    LoadingContainer: LoadingContainer
})(MapContainer)