import React from 'react'

class AddRowButton extends React.Component {
    render(){
        return(
            <div className = "button-div">
                <button className = "btn" onClick = {(e) => this.props.selectOption(e)} style = {{width: "100%"}} form = "contactForm" value = {this.props.value}>
                    <div className = "checkout-option-div">
                        <span> 
                            <img className = "checkout-option-img" src = {`${process.env.PUBLIC_URL}/plusMark.svg`} />
                            {this.props.text}
                            </span>
                        </div>
                </button> 
            </div>
        )
    }
}

export default AddRowButton