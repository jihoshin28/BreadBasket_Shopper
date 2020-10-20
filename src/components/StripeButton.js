import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class StripeButton extends React.Component {
    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(data)
            })
        })
    }
    
    render(){
        return( 
            <StripeButton
                token = {this.onToken}
                stripeKey= "pk_test_51HN5XFKYkELgOBXmFpEJqnw7WynOS5irzHdnuse7CMysCArWYZPwclIdO73m8Ot8CVNn6pQANPfuPkbDmLk3HRdD00ss20lGUO"
                >

            </StripeButton>
        )
    }
}

export default StripeButton