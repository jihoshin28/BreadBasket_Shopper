import React from 'react'
import connect from 'react-redux'
import mapContainer from '../components/MapContainer'

class MapPage extends React.Component {
    componentDidMount(){

    }
    
    render(){
        return(
            <MapContainer></MapContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        store_city: state.selectedStore.attributes.city,
        store_address: state.selectedStore.attributes.address,
        store_state: state.selectedStore.attributes.state
    })
}

export default connect(mapStateToProps,{})(MapPage)