import React from 'react' 
import { connect } from 'react-redux'
import PaymentOption from '../components/PaymentOption'
import {} from '../actions'

class PaymentOptions extends React.Component{
    
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
                <PaymentOption title = 'Phone Number'/>
                <PaymentOption title = 'Address'/>
                <PaymentOption title = 'Tip'/>
                <PaymentOption title = 'Delivery Time'/>
                <PaymentOption title = 'Substitution Preference'/>
                <PaymentOption title = 'Delivery Notes'/>
                <PaymentOption title = 'Payment Method'/>
            </React.Fragment>
          

        )
    }
}

export default PaymentOptions