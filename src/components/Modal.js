import React from 'react' 

class Modal extends React.Component {

    componentDidUpdate(){

        console.log(this.props.item)
        console.log(this.props)
    }

    renderContent(){
        if(!this.props.content){
            console.log('this props')
            return "Loading..."
        } else if(!!this.props.content.item){
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
                        <img style = {{width: '100%'}}src = {`${item.image}`}/>
                        
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

export default Modal