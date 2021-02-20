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

        if(this.props.value === 'stripe'){
            src = `${process.env.PUBLIC_URL}/stripeIcon.png`
            btnClass = "btn btn-primary"
        }

        if(this.props.value === 'paypal'){
            src = `${process.env.PUBLIC_URL}/paypalIcon.svg.png`
            btnClass = "btn btn-warning"
        }

        if(this.props.value === 'test'){
            btnClass = "btn btn-success"
        }

        return(
            <div style = {{borderRadius: "3px", webkitBoxShadow: "0px 0 5px rgba(99, 99, 99, 0.842)"}} className = "button-div">
                <button className = {btnClass} onClick = {(e) => this.props.selectOption(e)} style = {{width: "100%"}} form = "contactForm" value = {this.props.value}>
                    <div className = "checkout-option-div">
                        {this.props.value === 'test' ?  
                            <h4>Test Checkout</h4>
                            :                            
                            <img className = "checkout-option-img" src = {src} />
                        }
                        </div>
                </button> 
            </div>
        )
    }
}

export default CheckoutRowButton