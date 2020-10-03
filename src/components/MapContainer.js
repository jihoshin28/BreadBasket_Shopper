import Axios from 'axios';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React from 'react'
import rails from '../services/Rails';
import axios from 'axios'


class MapContainer extends React.Component {
    componentDidMount (){
        this.getAddress()
    }

    getAddress = async() => {
        let location = await axios.post('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg')
        console.log(location)
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
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
                
            >
                <InfoWindow visible = {true}>
                </InfoWindow>    
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg"
})(MapContainer)