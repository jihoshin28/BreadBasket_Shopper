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

    renderTip = () => {
        console.log(this.props.chosenTip)
        if(!this.props.chosenTip.value || this.props.chosenTip.value === "0"){
            return `No Tip`
        } else {
            return `$${(this.props.chosenTip.amount/100).toFixed(2)} (${this.props.chosenTip.value}%)`
        }
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
                <PaymentOption title = 'Phone Number' selectType = "Select" bottomOption = {<Contact numbers = {this.userNumbers()}/>} bottomContent = {this.props.chosenPhone}/>
                <PaymentOption title = 'Address' selectType = "Select" bottomOption = {<Address addresses = {this.userAddresses()}/>} bottomContent = {this.props.chosenAddress}/>
                <PaymentOption title = 'Tip' selectType = "Select" bottomOption = {<Tip />} bottomContent = {this.renderTip()}/>
                <PaymentOption title = 'Delivery Time' selectType = "Select" bottomOption = {<DeliveryTime />} bottomContent = {`Deliver by ${this.props.chosenDeliveryDay}, ${this.props.chosenDeliveryDate} at ${this.props.chosenDeliveryTime}`}/>
                <PaymentOption title = 'Substitution Preference' selectType = "Select" bottomOption = {<Substitute />} bottomContent = {`"${this.props.chosenSubstitute}"`}/>
                <PaymentOption title = 'Delivery Notes' selectType = "Edit" bottomOption = {<DeliveryNote />} bottomContent = {this.props.chosenDeliveryNote}/>
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
        chosenDeliveryDate:`${state.order.delivery_time.date.month}/${state.order.delivery_time.date.day}`,
        chosenDeliveryDay: state.order.delivery_time.day,
        chosenDeliveryTime: state.order.delivery_time.time, 
        chosenSubstitute: state.order.substitute.phrase,
        chosenDeliveryNote: state.order.note 
    })
}

export default connect(mapStateToProps, {getCurrentShopper})(PaymentOptions)