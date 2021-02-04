import React from 'react' 

class PaymentOption extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className = "payment-option">
                    <div className = "row payment-option-line">
                        <div>
                            <h3>
                                {this.props.title}
                            </h3>
                        </div>
                        <div>
                            <a href = "#">
                                Link
                            </a>
                        </div>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div>
            
                    </div>
            </div>
        )
    }
}

export default PaymentOption 