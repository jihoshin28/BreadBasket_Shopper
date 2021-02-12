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
            day = (day - 7).toString()
        }
        let dayDisplay = ''
        if(day === '0'){
            dayDisplay = 'Sunday'
        } else if (day === '1'){
            dayDisplay = 'Monday'
        } else if (day === '2'){
            dayDisplay = 'Tuesday'
        } else if (day === '3'){
            dayDisplay = 'Wednesday'
        } else if (day === '4'){
            dayDisplay = 'Thursday'
        } else if (day === '5'){
            dayDisplay = 'Friday'
        } else if (day === '6'){
            dayDisplay = 'Saturday'
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
                        <p>{`${mm}/${dd}`}</p>
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
                    <button type = "button" onClick = {(e) => this.selectTime(e)} style = {{width: "100%"}} value = {time}>
                        <p>{time}</p>
                    </button> 
                )
            })}
        </div>
        )
    }

    selectDate = (e) => {
        let date = e.currentTarget.children[0].innerHTML.split('/')
        let day = date[1]
        let month = date[0]
        this.setState({
            selectedDay: this.dayDisplay(e.currentTarget.value),
            selectedDate: {
                day: day,
                month: month
            }
        })
    }

    selectTime = (e) => {
        let delivery_time = {
            'time': e.currentTarget.value,
            'date': this.state.selectedDate,
            'day': this.state.selectedDay
        }
        this.props.updateOrderDeliveryTime(delivery_time)
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

export default connect(null, {updateOrderDeliveryTime})(DeliveryTime)