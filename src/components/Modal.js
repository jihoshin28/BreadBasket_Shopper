import React from 'react' 
import {connect} from 'react-redux'
import { clearItem, clearConfirm } from '../actions'

class Modal extends React.Component {
    
    constructor(){
        super()
        this.ref = React.createRef()
    }

    componentDidMount(){
        const selectedDiv = this.ref.current
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }

        const observer = new MutationObserver(function (mutationList, observer) {
            let mutation = mutationList[0]
            console.log(mutation)
            if(mutation.target.className === "modal fade show"){
                return
            } else {
                console.log(this.props.item, this.props.confirm)
            }
        }, options)
        observer.observe(selectedDiv, {
            attributes: true,
            attributeFilter: ["class"]
        })
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            this.forceUpdate()
        }
    }

    clearContent(){
        this.props.clearItem()
        this.props.clearConfirm()
    }

    renderContent(){
        if(!this.props.confirm && !this.props.item){
            console.log('this props')
            return "Loading..."
        } else if(this.props.item){
            let item = this.props.item.data.attributes
            return (
                <div class = "modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{item.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img style = {{width: '100%'}} src = {`${item.image}`}/>
                    </div>
                </div>
            )
        } else if(this.props.confirm){
            return (
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            )
        }
    }

    render(){
        return (
            <div ref = {this.ref} class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                {this.renderContent()}
            </div>
            </div>
    
        )
    }
}

export default connect(null, {clearItem, clearConfirm})(Modal)