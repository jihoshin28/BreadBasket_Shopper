import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'


class SubmitModal extends React.Component {

    renderInput = ({ input, meta, label }) => {
    console.log(input)
        return (
            
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for = "input">{label}</label>
                <div class = "col-smn-9">
                    <input type = "text" class = "form-control" id = "input" {...input} />
                </div>
                {/* <div> {meta.error}</div> */}
            </div>
        )
    }

    // searchSubmit = (formValues) => {
    //     this.props.history.push(`/search/${formValues.searchItem}`)
    // }

    render(){
        return (
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id = "ModalLabel">{this.props.message}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <p>{this.props.message}</p>
                </div>
                <div class="modal-footer">
                    <button onClick = {() => this.confirm(this.props.title, this.props.id)} type="button" class="btn btn-primary">Confirm</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
            // <div>
            //     <form onSubmit = {this.props.handleSubmit(this.searchSubmit)}>
            //         <Field name = "searchItem" component = {this.renderInput} label = "Search"/>

            //         <button style = {{marginLeft: ".5em"}}className = "btn btn-primary" type="submit">Search Item</button>
            //     </form>
            // </div>
        )
    }
}

let validate = (formValues) => {
    let error = {}

    if(!formValues.searchItem){
        error.searchItem = "Please enter an Item"
    }

    return error
}

let formWrapped = reduxForm({
    form: 'searchForm',
    validate: validate
})(SubmitModal)

let mapStateToProps = state => {
    return({
        submitType: state.submissions.submit.type
    })
} 

export default SubmitModal