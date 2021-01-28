import React from 'react' 
import {connect} from 'react-redux'
import { clearItem, clearConfirm } from '../actions'

class Modal extends React.Component {

    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            this.forceUpdate()
        }
    }

    componentWillUnmount(){
        if(!!this.props.content.item){
            this.props.clearItem()
            console.log('cleared item')
        } else if(!!this.props.content.confirm){
            this.props.clearConfirm()
            console.log('cleared confirmation')
        }

    }

    renderContent(){
        if(!this.props.content){
            console.log('this props')
            return "Loading..."
        } else if(this.props.content.item){
            let item = this.props.content.item.data.attributes
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
        } else if(this.props.content.confirm){
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
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                {this.renderContent()}
            </div>
            </div>
    
        )
    }
}

export default connect(null, {clearItem, clearConfirm})(Modal)