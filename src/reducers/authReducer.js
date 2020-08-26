const INTIAL_STATE = {
    signedIn: null,
    currentUser: null
}

export default (state = INTIAL_STATE, action) => {
    console.log(action.payload)
    switch(action.type){
        case 'SIGN_IN':
            return{...state, 
                isSignedIn: true, 
                currentuser: action.payload
            }
        case 'SIGN_OUT':
            return{...state, isSignedIn: false}
        default:
            return state 
    }
}