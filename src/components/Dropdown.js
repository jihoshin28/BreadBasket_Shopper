import React from 'react'

let Dropdown = props => {
    document.querySelector('dropdown-menu')
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="menu" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>

        
    )
}

export default Dropdown