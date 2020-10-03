import axios from 'axios';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {storeCoords} from '../actions'
import React from 'react'
import {connect} from 'react-redux'


class MapContainer extends React.Component {


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
                zoom={15}
                style={this.mapStyles}
                initialCenter={
                    this.props.store_coords
                }
            > 
                <Marker
                    name={'Your position'}
                    position={this.props.user_coords}
                    // icon={{
                    //     url: "/path/to/custom_icon.png",
                    //     anchor: new google.maps.Point(32, 32),
                    //     scaledSize: new google.maps.Size(64, 64)
                    // }} 
                />

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

const mapStateToProps = (state) =>{
    return({
        store_coords: state.stores.store_coords,
        user_coords: state.stores.user_coords
    })
}

export default connect(mapStateToProps, {storeCoords})(GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg",
    LoadingContainer: LoadingContainer
})(MapContainer))