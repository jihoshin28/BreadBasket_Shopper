import React from 'react' 
import { Link } from 'react-router-dom'

class PaymentOption extends React.Component{
    constructor(props){
        super()
        this.state = {
            selectType: props.selectType,
            showBottomEdit: false
        }
    }

    showBottomEdit = (showState)  => {
        if(!showState){
            this.setState({
                showBottomEdit: true
            })
        } else {
            this.setState({
                showBottomEdit: false
            })
        }
    }

    renderSelect = (type) => {
        if(type === 'none'){
            return (
                <div></div>
            )
        } else if (type === "add"){
            return (
                <Link onClick = {() => this.showBottomEdit(this.state.showBottomEdit)}>
                    Add
                </Link>
            )
        } else if(type === "select"){
            return(
                <Link onClick = {() => this.showBottomEdit(this.state.showBottomEdit)}>
                    Select
                </Link>
            )
        } else if(type === "edit"){
            return(
                <Link onClick = {() => this.showBottomEdit(this.state.showBottomEdit)}>
                    Edit
                </Link>
            )
        }
    }

    render(){
        return(
            <div className = "payment-option">
                    <div className = "row payment-option-line">
                        <div>
                            <h3>
                                {this.props.title}
                            </h3>
                        </div>
                        <div>
                            {this.renderSelect(this.state.selectType)}
                        </div>
                    </div>
                    <div className = "payment-divider">
                    </div>
                    <div className = "row payment-option-line">
                        {this.state.showBottomEdit ? 
                            this.props.bottomContent
                            :
                            <div>
                                
                            </div>

                        }
                    </div>
            </div>
        )
    }
}

export default PaymentOption 