import React from 'react' 
import { connect } from 'react-redux'
import PaymentOption from '../components/PaymentOption'
import Address from '../components/checkout_options/Address'
import CheckoutPayment from '../components/checkout_options/CheckoutPayment'
import Contact from '../components/checkout_options/Contact'
import DeliveryNote from '../components/checkout_options/DeliveryNote'
import DeliveryTime from '../components/checkout_options/DeliveryTime'
import Substitute from '../components/checkout_options/Substitute'
import Tip from '../components/checkout_options/Tip'
import { reduxForm, Field } from 'redux-form'
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
                <PaymentOption shopperId = {this.props.shopperId} title = 'Phone Number' selectType = "Add" bottomContent = {<Contact/>}/>
                <PaymentOption shopperId = {this.props.shopperId} title = 'Address' selectType = "Add" bottomContent = {<Address />}/>
                <PaymentOption shopperId = {this.props.shopperId} title = 'Tip' selectType = "Select" bottomContent = {<Tip />}/>
                <PaymentOption shopperId = {this.props.shopperId} title = 'Delivery Time' selectType = "Select" bottomContent = {<DeliveryTime/>}/>
                <PaymentOption shopperId = {this.props.shopperId} title = 'Substitution Preference' selectType = "Select" bottomContent = {<Substitute/>}/>
                <PaymentOption shopperId = {this.props.shopperId} title = 'Delivery Notes' selectType = "Edit" bottomContent = {<DeliveryNote />}/>
                <PaymentOption shopperId = {this.props.shopperId} title = 'Payment Method' bottomContent = {<CheckoutPayment />}/>
            </React.Fragment>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        shopperId: state.auth.currentShopper.id,
    })
}

export default connect(mapStateToProps, {})(PaymentOptions)