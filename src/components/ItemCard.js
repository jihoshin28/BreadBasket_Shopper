import React from 'react'

const ItemCard = props => {
    return (
        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <div class="card" style={{ width: "10rem", height: "10rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6 class="card-title">Card title</h6>
                    <p style={{fontSize: "10px"}}> Item Name(dfsdsdfsd)</p>
                    <a style = {{fontSize: "10px", width: "2rem", height: '2rem'}} href="" class="btn btn-primary">+</a>
                </div>
            </div>
        </div>
    )
}

export default ItemCard