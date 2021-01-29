import React, {useState, useEffect} from 'react' 
import {connect} from 'react-redux'
import { clearItemPic, clearConfirm, cancelOrder } from '../actions'

const Modal = (props) => {
    
    const[ref] = useState(React.createRef())

    useEffect(() => {
        const selectedDiv = ref.current
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }

        function clearContent(){
            props.clearItemPic()
            props.clearConfirm()
        }
        
        const observer = new MutationObserver(function (mutationList, observer) {
            let mutation = mutationList[0]
            console.log(mutation, props.history)
            if(mutation.target.className === "modal fade show"){
                return
            } else {
                clearContent()
            }
        }, options)
        observer.observe(selectedDiv, {
            attributes: true,
            attributeFilter: ["class"]
        })
    }, [])

    let confirmAction = async (title, id) => {
        console.log(props)
        if(title === "Delete Order"){
            await props.cancelOrder(id)
            window.location.reload()
        }
    }

    let renderContent = () => {
        if(!props.confirm && !props.item){
            return 
        } else if(props.item){
            let item = props.item.data.attributes
            return (
                <div class = "modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">{item.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img style = {{width: '100%'}} src = {`${item.image}`}/>
                    </div>
                </div>
            )
        } else if(props.confirm){
            return (
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id = "ModalLabel">{props.confirm.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <p>{props.confirm.message}</p>
                    </div>
                    <div class="modal-footer">
                        <button onClick = {() => confirmAction(props.confirm.title, props.confirm.id)} type="button" class="btn btn-primary">Confirm</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            )
        }
    }
        return (
            <div ref = {ref} class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                {renderContent()}
            </div>
            </div>
    
        )
}

export default connect(null, {clearItemPic, clearConfirm, cancelOrder})(Modal)