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
import {getCurrentShopper} from '../actions'

class PaymentOptions extends React.Component{
    componentDidMount(){
        this.props.getCurrentShopper(this.props.shopperId)
        console.log(this.props.currentShopper, 'current_SHOPPER')
    }
    //All have titles above the divider
    
    //Contact Information
    //Conditionally Add if no contacts
    //Select Button w/ Add Line or Phone Number Display underneath
    userNumbers = () => {
        return this.props.currentShopper.phones.map((number) => {
            return number.number
        })
    }

    //Delivery Address
    //Conditionally Add if no address
    //Select Button w/ Add Button or Address Display underneath 
    
    userAddresses = () => {
        return this.props.currentShopper.addresses.map((address) => {
            return address
        })
        // this.props.currentShopper.attributes
    }

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
                <PaymentOption title = 'Phone Number' selectType = "Add" bottomOption = {<Contact numbers = {this.userNumbers()}/>} bottomContent = {this.props.number}/>
                <PaymentOption title = 'Address' selectType = "Add" bottomOption = {<Address addresses = {this.userAddresses()}/>} bottomContent = {this.props.address}/>
                <PaymentOption title = 'Tip' selectType = "Select" bottomOption = {<Tip />} bottomContent = {this.props.tip}/>
                <PaymentOption title = 'Delivery Time' selectType = "Select" bottomOption = {<DeliveryTime />} bottomContent = {this.props.delivery_time}/>
                <PaymentOption title = 'Substitution Preference' selectType = "Select" bottomOption = {<Substitute />} bottomContent = {this.props.substitute}/>
                <PaymentOption title = 'Delivery Notes' selectType = "Edit" bottomOption = {<DeliveryNote />} bottomContent = {this.props.note}/>
                <PaymentOption title = 'Payment Method' bottomOption = {<CheckoutPayment />}/>
            </React.Fragment>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        shopperId: state.auth.currentShopper.id,
        currentShopper: state.auth.currentShopper,
        chosenPhone: state.order.number,
        chosenAddress: state.order.address, 
        chosenTip: state.order.tip,
        chosenDeliveryTime: state.order.delivery_time,
        chosenSubstitute: state.order.substitute,
        chosenDeliveryNote: state.order.note 
    })
}

export default connect(mapStateToProps, {getCurrentShopper})(PaymentOptions)