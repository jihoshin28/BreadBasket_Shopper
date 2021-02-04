import React from 'react' 
import { connect } from 'react-redux'
import {} from '../actions'

class PaymentOptions extends React.Component{
    constructor(){
        super()
        this.state = {
            tip: 0,
        }
    }
    
    //All have titles above the divider

    //Contact Information
    //Conditionally Add if no contacts
    //Select Button w/ Add Line or Phone Number Display underneath


    //Delivery Address
    //Conditionally Add if no address
    //Select Button w/ Add Button or Address Display underneath 

    //Tip
    //Select Button w/ 0, 5, 10, 15, 'other' options underneath or tip amount display

    //Delivery Time
    //Select button w/ Today, and 4 days ahead options, and time select options undeneath or date/time display
    
    //Substitution Preference
    //Select button w/ Pick for me, Contact me, Refund options or option display

    //Delivery Instructions
    //Select button with text input box and submit button or italicized quoted note

    //Payment Method 
    //Buttons underneath for Stripe/Paypal Options 
    render(){
        return(
            <React.Fragment>
                <div className = "payment-option">
                    <div className = "row payment-option-line">
                        <div>
                            <h3>
                                Contact Information
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
                <div className = "payment-option">
                    <div className = "row">
                        <h3>
                            Contact Information
                        </h3>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className = "payment-option">
                    <div>
                        <h3>
                            Contact Information
                        </h3>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className = "payment-option">
                    <div>
                        <h3>
                            Contact Information
                        </h3>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className = "payment-option">
                    <div>
                        <h3>
                            Contact Information
                        </h3>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className = "payment-option">
                    <div>
                        <h3>
                            Contact Information
                        </h3>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className = "payment-option">
                    <div>
                        <h3>
                            Contact Information
                        </h3>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div>
                        
                    </div>
                </div>
            </React.Fragment>
          

        )
    }
}

export default PaymentOptions