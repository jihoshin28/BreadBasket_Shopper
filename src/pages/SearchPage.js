import React from 'react'
import { connect } from 'react-redux'
import Searchbar from '../components/Searchbar'

class SearchPage extends React.Component{
    componentDidMount(){
        console.log(this.props.match.params.item)
        console.log(this.props.items)
        console.log(!!this.props.items.find(item => item.attributes.name == this.props.match.params.item), "REALLY GOD EXISTS")
    }

    searchTerm = () => {
        // store results in array
        let results = []
        
        //find if current items from Store are in the 
    }
    render(){
        let category = this.props.match.params.category
        let filteredItems = this.props.items.filter(item => item.attributes.category === category)
        // let categoryData = this.props.categories.find((category) => category.name === this.props.match.params.category)
        // let categoryTitle = categoryData.title
        return(
            <div class="content">
                <div class="container-fluid justify-content-center">
                    <h1 class="productsHeader">Search</h1>
                    <div class="row productsHeader">
                        <div className="col-sm-5">
                            <h2>{this.props.selectedStore.attributes.name}</h2>
                        </div>
                        <div className="col-sm-5">
                            <Searchbar onSearchSubmit={this.props.onSearchSubmit} onSearchChange={this.props.onSearchChange} />
                        </div>
                    </div>

                    {/* <FoodList items={filteredItems} /> */}
                </div>
            </div>

        )
        
    }
}
const mapStateToProps = state => {
    return ({
        items: state.items.itemsList.data,
        selectedStore: state.stores.selectedStore
    })
}
export default connect(mapStateToProps)(SearchPage)