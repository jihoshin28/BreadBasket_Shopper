import React from 'react' 
import { connect } from 'react-redux'
import PaymentOption from '../components/PaymentOption'
import {} from '../actions'

class PaymentOptions extends React.Component{
    
    //All have titles above the divider
    bottomContent = (content) => {
        return(
            <div class = "payment-option-bottom">
                {content}
            </div>
        )
    }
    //Contact Information
    //Conditionally Add if no contacts
    //Select Button w/ Add Line or Phone Number Display underneath
    contactContent() {
        return(
            <h1>
                Hello
            </h1>
        )
    }

    //Delivery Address
    //Conditionally Add if no address
    //Select Button w/ Add Button or Address Display underneath 
    addressContent(){
        return(
            <h1>
                Hello
            </h1>
        )
    }
    //Tip
    //Select Button w/ 0, 5, 10, 15, 'other' options underneath or tip amount display
    tipContent(){
        return(
            <h1>
                Hello
            </h1>
        )
    }
    //Delivery Time
    //Select button w/ Today, and 4 days ahead options, and time select options undeneath or date/time display
    deliveryContent(){
        return(
            <h1>
                Hello
            </h1>
        )
    }
    //Substitution Preference
    //Select button w/ Pick for me, Contact me, Refund options or option display
    substituteContent(){
        return(
            <h1>
                Hello
            </h1>
        )
    }

    //Delivery Instructions
    //Select button with text input box and submit button or italicized quoted note
    notesContent(){
        return(
            <h1>
                Hello
            </h1>
        )
    }
    //Payment Method 
    //Buttons underneath for Stripe/Paypal Options 
    paymentContent(){
        return(
            <h1>
                Hello
            </h1>
        )
    }

    render(){
        return(
            <React.Fragment>
                <PaymentOption title = 'Phone Number' selectType = "Add" bottomContent = {this.bottomContent(this.contactContent())}/>
                <PaymentOption title = 'Address' selectType = "Add" bottomContent = {this.bottomContent(this.addressContent())}/>
                <PaymentOption title = 'Tip' selectType = "Select" bottomContent = {this.bottomContent(this.tipContent())}/>
                <PaymentOption title = 'Delivery Time' selectType = "Select" bottomContent = {this.bottomContent(this.deliveryContent())}/>
                <PaymentOption title = 'Substitution Preference' selectType = "Select" bottomContent = {this.bottomContent(this.substituteContent())}/>
                <PaymentOption title = 'Delivery Notes' selectType = "Edit" bottomContent = {this.bottomContent(this.notesContent())}/>
                <PaymentOption title = 'Payment Method' bottomContent = {this.bottomContent(this.paymentContent())}/>
            </React.Fragment>
          

        )
    }
}

export default PaymentOptions