import React from 'react'

class CheckoutRowButton extends React.Component {

    render(){
        return(
            <div className = "button-div">
                <button className = "btn btn-light" onClick = {(e) => this.props.selectOption(e)} style = {{width: "100%"}} form = "contactForm" value = {this.props.value}>
                    <div className = "checkout-option-div">
                        <span> 
                            {this.props.checked === this.props.value ?
                                <img className = "checkout-option-img" src = {`${process.env.PUBLIC_URL}/checkMark.svg`} />
                                :
                                <img className = "checkout-option-img" src = {`${process.env.PUBLIC_URL}/circle.svg`} />
                            }
                            {this.props.text}
                            </span>
                        </div>
                </button> 
            </div>
        )
    }
}

export default CheckoutRowButton