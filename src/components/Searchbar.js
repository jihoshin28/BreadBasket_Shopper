import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field} from 'redux-form'


class Searchbar extends React.Component {

    renderInput = ({ input, meta, label }) => {
    console.log(input)
        return (
            <div class="input-group-prepend searchBar">
                <label>{label}</label>
                <input {...input} />
                {/* <div> {meta.error}</div> */}
                <button type="submit" id="button-addon1">Search Item</button>
            </div>
        )
    }

    searchSubmit = (formValues) => {
        this.props.history.push(`/search/${formValues.searchItem}`)
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.props.handleSubmit(this.searchSubmit)}>
                    <Field name = "searchItem" component = {this.renderInput} label = "Search"/>
                </form>
            </div>
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
})(Searchbar)

export default connect(null)(formWrapped)