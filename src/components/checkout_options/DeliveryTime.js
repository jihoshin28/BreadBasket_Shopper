import React from 'react'
import { connect } from 'react-redux'
import {updateOrderDeliveryTime} from '../../actions'

class DeliveryTime extends React.Component {

    constructor(){
        super()
        this.state = {
            selectedDay: null
        }
    }

    dayDisplay = (day) => {
        
        if(day > 6){
            day = day - 7
        }
        let dayDisplay = ''
        if(day === '0'){
            dayDisplay = 'Sun'
        } else if (day === '1'){
            dayDisplay = 'Mon'
        } else if (day === '2'){
            dayDisplay = 'Tue'
        } else if (day === '3'){
            dayDisplay = 'Wed'
        } else if (day === '4'){
            dayDisplay = 'Thu'
        } else if (day === '5'){
            dayDisplay = 'Fri'
        } else if (day === '6'){
            dayDisplay = 'Sat'
        }
        console.log(dayDisplay)
        return dayDisplay
    }

    renderDates = () => {
        var today = new Date();
        let result = []
        for(let i = 0; i < 4; i++){

            var dd = String(today.getDate() + i).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var day = String(today.getDay() + i)
            let currentDay = this.dayDisplay(day)

            result.push(
                <div className = "button-div">
                    <button type = "button" onClick = {(e) => this.selectDate(e)} style = {{width: "100%"}} value = {day}>
                        <p>{`${mm}-${dd}`}</p>
                        <p>{`${currentDay}`}</p>
                    </button> 
                </div>  
            )
        }
        return result
    }

    renderTimes = (selectedDay) => {
        let today = new Date()
        let day = String(today.getDay())
        let times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM' ,'6PM', '7PM', '8PM', '9PM', '10PM', '11PM' ]
        if(day === selectedDay){
            let time = today.getHours()
            if(time > 22){
                return(
                    <div>
                        Too late to deliver today!
                    </div>
                )
            } else {
                let index = time - 9
                times = times.slice(index)
                
            }
            return 
        }

        return (
        <div className = "button-div">
            {times.map((time) => {
                return(
                    <button type = "button" onClick = {(e) => this.selectDate(e)} style = {{width: "100%"}} value = {day}>
                        <p>{time}</p>
                    </button> 
                )
            })}
        </div>
        )
    }

    selectDate = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            selectedDay: e.currentTarget.value
        })
    }

   

    render() {
        return (
            <div className = "ui container">
                <div className = "button-options-row">
                    {this.renderDates()}
                </div>
                <div className = "button-options">

                    {   
                        this.state.selectedDay ?
                        this.renderTimes(this.state.selectedDay)
                        :
                        <div></div>
                    }   
                        
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
        
    })
}

export default connect(mapStateToProps, {updateOrderDeliveryTime})(DeliveryTime)