import React, {useState, useEffect, useRef} from 'react'

let Dropdown = props => {
    
    const storeOptions = props.stores.map((store)=> {
        return (
                <button class="dropdown-item" key = {store.key} value={store.name}>{store.name}</button>
        )
    })
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.selected}
            </button>
            <div onClick = {(e) => props.onStoreChange(e)} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {storeOptions}
            </div>
        </div>

        
    )
}

export default Dropdown