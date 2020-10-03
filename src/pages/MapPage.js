import React from 'react'
import connect from 'react-redux'

class MapPage extends React.Component {
    
}

const mapStateToProps = (state) => {
    return({
        store_city: state.selectedStore.attributes.city,
        store_address: state.selectedStore.attributes.address,
        store_state: state.selectedStore.attributes.state
    })
}

export default connect(mapStateToProps,{})(MapPage)