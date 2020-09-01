import React from 'react'
import {connect} from 'react-redux'
import {selectStore} from '../actions'

class StoreDropdown extends React.Component {
    componentDidMount(){
    }
    
    storeOptions = () => {
        return this.props.stores.map((store)=> {
            return (
                <button class="dropdown-item" id = {store.attributes.id} value={store.attributes.name}>{store.attributes.name}</button>
            )
        })
    } 

    render() {
        return (
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.selectedStore.attributes.name}
                </button>
                <div onClick = {(e) => {
                    let store = this.props.stores.find(store => store.id == e.target.id)
                    console.log(store)
                    this.props.selectStore(store)
                    }} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {this.storeOptions()}
                </div>
            </div>
    
            
        )
    }
}

let mapStateToProps = state => {
    return ({
        stores: state.stores.storesList,
        selectedStore: state.stores.selectedStore
    })
}

export default connect(mapStateToProps, {selectStore})(StoreDropdown)