const INTIAL_STATE = {
    signedIn: null,
    currentShopper: {}
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {...state, 
                signedIn: true,
                currentShopper: action.payload
            }
        case 'SIGN_OUT':
            return {...state, 
                signedIn: false, 
                currentShopper: {}
            }
        default:
            return state 
    }
}