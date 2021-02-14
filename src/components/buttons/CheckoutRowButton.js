import React from 'react'

class CheckoutRowButton extends React.Component {

    render(){
        let src 
        this.props.checked === this.props.value ? src = `${process.env.PUBLIC_URL}/checkMark.svg` : src = `${process.env.PUBLIC_URL}/circle.svg`
        return(
            <div className = "button-div">
                <button className = "btn btn-light" onClick = {(e) => this.props.selectOption(e)} style = {{width: "100%"}} form = "contactForm" value = {this.props.value}>
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