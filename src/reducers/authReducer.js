const INTIAL_STATE = {
    signedIn: null,
    currentUser: null
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return{...state, isSignedIn: true}
        case 'SIGN_OUT':
            return{...state, isSignedIn: false}
        default:
            return state 
    }
}