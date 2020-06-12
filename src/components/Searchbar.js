import React from 'react'

const Searchbar = props => {
    return (
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Search Item</button>
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
    )
}

export default Searchbar