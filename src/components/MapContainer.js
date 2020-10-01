import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react'

class MapContainer extends React.Component {

    mapStyles = {
        width: '100%',
        height: '100%'
    };
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
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg"
})(MapContainer)