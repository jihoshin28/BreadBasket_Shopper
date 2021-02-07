import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {updateOrderTip} from '../../actions'

class Tip extends React.Component {

    constructor(){
        super()
        this.state = {
            otherSelect: false
        }
    }

    selectOption = (e) => {
        console.log(e.target.value)
        this.props.updateOrderTip(e.target.value)
        this.setState({
            otherSelect: false
        })
    }

    selectOther = () => {
        this.setState({
            otherSelect: true
        })
    }
    
    submitOther = (e) => {
        console.log(e.target.children[0].value)
        this.setState({
            otherSelect: false
        })
    }

    render() {
        return (
            <div className = "ui container">
                <div className = "button-options-row">
                    <div className = "button-div">
                        <button onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {0}>None</button> 
                    </div>  
                    <div className = "button-div">
                        <button onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {5}>5%</button> 
                    </div>
                    <div className = "button-div">
                        <button onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {10}>10%</button> 
                    </div>
                    <div className = "button-div">
                        <button onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {15}>15%</button> 
                    </div>
                    {
                        this.state.otherSelect ?
                        <form onSubmit = {(e) => this.submitOther(e)} id = "otherTip">
                            <input type = "integer" name = "otherTip"></input>
                            <button value = "submit" type = "submit" form = "otherTip" >Submit</button>
                        </form>
                        :
                        <div className = "button-div">
                            <button onClick = {() => this.selectOther()} style = {{width: "100%"}} >Other</button> 
                        </div>
                    }
                </div>
            </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        currentTotal: state.order.total,
        shopperId: state.auth.currentShopper.id
    })
}

export default connect(mapStateToProps, {updateOrderTip})(Tip)