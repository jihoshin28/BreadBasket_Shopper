import React from 'react'

class CheckoutColumnButton extends React.Component {
    
    render(){
        let btnClass 
        this.props.selected === this.props.value.toString() ? btnClass = 'btn btn-success' : btnClass = 'btn btn-outline-secondary'
        
        return(
            <div className = "button-div">
                <div style = {{width: '85%', marginLeft: '7%'}}>
                    <button style = {{backGroundColor: 'green'}} class = {btnClass} type = "button" onClick = {(e) => this.props.selectOption(e)} style = {{width: "100%"}} value = {this.props.value}>{this.props.text}</button> 
                </div>
            </div>
        )
    }
}

export default CheckoutColumnButton