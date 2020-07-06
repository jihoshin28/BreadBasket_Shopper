import React from 'react'

const ItemCard = props => {
    return (
        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" style = {{justifyContent: "space-around"}}>
            <div class="card" style={{ width: "250px", height: "250px" }}>
                <div style = {{height: "45%", width: "45%", alignSelf: "center", marginTop: "5px"}}>
                    <img src={props.image} style={{ height: "100%" }} class="card-img-top" alt="..." />
                </div>
               
                <div class="card-body">
                    <h6 class="card-title">{props.name}</h6>
                    <p style={{fontSize: "10px"}}> ${props.price}</p>
                    <a style = {{fontSize: "10px", width: "2rem", height: '2rem'}} href="" class="btn btn-primary">+</a>
                </div>
            </div>
        </div>
    )
}

export default ItemCard