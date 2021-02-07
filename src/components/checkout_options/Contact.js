import React from 'react'
import { connect } from 'react-redux'
import { addShopperNumber, updateOrderNumber } from '../../actions'

class Contact extends React.Component {

    componentDidMount(){
        console.log(this.props.numbers)
    }
    
    renderContacts = () => {
        let options = ['510-789-9938', '510-299-8061']
        if (!options) {
            return(
                <div></div>
            )
        } else {

            return options.map((contact) => {
                return(
                    <div className = "button-div">
                        <button onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} form = "contactForm" value = {`${contact}`}>{contact}</button> 
                    </div>
                )
            })
        }
        
    }

    // plus sign 
    //<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="background-color:;border-color:#038767;color:#038767;min-height:14px;min-width:14px;width:14px;height:14px" class="pa1 mr3 ba br-100 bg-transparent b--dark-gray" data-test="OptionListButton-icon"><path d="M20 11H13V4C13 3.45 12.55 3 12 3C11.45 3 11 3.45 11 4V11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H11V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11Z" fill="currentColor"></path></svg>

    //checkmark sign 
    //<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="pa1 mr3 ba br-100 bg-transparent b--dark-gray" data-test="OptionListButton-icon" style="background-color: rgb(3, 135, 103); border-color: rgb(3, 135, 103); color: rgb(255, 255, 255); min-height: 14px; min-width: 14px; width: 14px; height: 14px;"><path d="M21.895 4.93001C21.505 4.54001 20.875 4.54001 20.485 4.93001L8.465 16.95L3.515 12C3.125 11.61 2.495 11.61 2.105 12C1.715 12.39 1.715 13.02 2.105 13.41L7.765 19.07C8.155 19.46 8.785 19.46 9.175 19.07L21.895 6.35001C22.285 5.96001 22.285 5.32001 21.895 4.93001Z" fill="currentColor"></path></svg>

    selectOption = (e) => {
        console.log(e.target.value)
    }

    addContact = (e) => {
        e.preventDefault()
        let form = {
            'number': e.target.children[0].value,
            'phoneable_type': 'Shopper',
            'phoneable_id': this.props.shopperId
        }
        this.props.addShopperNumber(form)
        console.log(e.target.children[0].value)
    }

    render() {
        return (
            <div className = "ui container">
                <div className = "button-options">
                    {this.renderContacts()}
                    <div className = "button-div">
                        <form id = "addContact" onSubmit = {(e) => this.addContact(e)} >
                            <input type = "text" name = "phone"></input>
                            <button type = 'submit' value = "submit" style = {{width: "100%"}} form = "addContact" >+</button> 
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        contacts: state.auth.currentShopper.phones
    })
}

export default connect(mapStateToProps, { addShopperNumber, updateOrderNumber})(Contact)
