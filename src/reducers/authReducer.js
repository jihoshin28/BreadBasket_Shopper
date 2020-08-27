const INTIAL_STATE = {
    signedIn: null
}

export default (state = INTIAL_STATE, action) => {
    console.log(action.payload)
    switch(action.type){
        case 'SIGN_IN':
            return {...state, 
                signedIn: true
            }
        case 'SIGN_OUT':
            return{...state, signedIn: false }
        default:
            return state 
    }
}