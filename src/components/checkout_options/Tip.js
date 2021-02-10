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
        let tip = (e.target.value/ 100) * this.props.currentTotal
        this.props.updateOrderTip(tip)
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
        let tip = (e.target.value / 100) * this.props.currentTotal
        this.props.updateOrderTip(tip)
        this.setState({
            otherSelect: false
        })
    }

    render() {
        return (
            <div className = "ui container">
                <div className = "button-options-row">
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {0}>None</button> 
                    </div>  
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {5}>5%</button> 
                    </div>
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {10}>10%</button> 
                    </div>
                    <div className = "button-div">
                        <button type = "button" onClick = {(e) => this.selectOption(e)} style = {{width: "100%"}} value = {15}>15%</button> 
                    </div>
                    <div className = "button-div">
                        <button type = "button" onClick = {() => this.selectOther()} style = {{width: "100%"}} >Other</button> 
                    </div>
                </div>
                <div>
                {
                    this.state.otherSelect ?
                    <form id = "otherTip" onSubmit = {(e) => this.submitOther(e)}>
                        <input type = "integer" name = "otherTip"></input>
                        <button type = "submit" value = "submit" form = "otherTip" >Submit</button>
                    </form>
                    :
                    <div></div>
                }
                </div>
            </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        currentTip: state.order.tip,
        currentTotal: state.order.total,
        shopperId: state.auth.currentShopper.id
    })
}

export default connect(mapStateToProps, {updateOrderTip})(Tip)