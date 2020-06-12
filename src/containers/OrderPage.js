import React, { Component } from 'react'

export class OrderPage extends Component {
    render() {
        return (
                <div>
                    
                    <h1>Order Page</h1>
                    <div class = "row">
                        <div class="col-sm-4">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <h3>Grocery store name</h3>
                        </div>
                        <div class="col-sm-4">
                            <h1>Hello sdiofisdfoisdiof</h1>
                        </div>
                    </div>
                </div>
           
            
        )
    }
}

export default OrderPage
