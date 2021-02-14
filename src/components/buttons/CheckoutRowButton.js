import React from 'react'

class CheckoutRowButton extends React.Component {

    render(){
        let src 
        let btnClass
        if(this.props.checked === this.props.value){
            src = `${process.env.PUBLIC_URL}/checkMark.svg`
            btnClass = "btn btn-success"

        } else {
            src = `${process.env.PUBLIC_URL}/circle.svg`
            btnClass = "btn btn-light"
        }  

        return(
            <div style = {{borderRadius: "3px", webkitBoxShadow: "0px 0 5px rgba(99, 99, 99, 0.842)"}} className = "button-div">
                <button className = {btnClass} onClick = {(e) => this.props.selectOption(e)} style = {{width: "100%"}} form = "contactForm" value = {this.props.value}>
                    <div className = "checkout-option-div">
                        <span> 
                            
                            <div className = "row checkout-option-items">
                                <div>
                                    <img className = {"checkout-option-img"} src = {src} />
                                </div>
                                <div style = {{marginLeft: '-2.5em'}}>
                                    {this.props.text}
                                </div>
                            </div>
                            </span>
                        </div>
                </button> 
            </div>
        )
    }
}

export default CheckoutRowButton